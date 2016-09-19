<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import createFocusTrap from 'focus-trap'

  export default {
    props: [
      {
        name: 'active',
        type: Boolean,
        default: true
      }, {
        name: 'paused',
        type: Boolean,
        default: false
      }, {
        name: 'initialFocus',
        default: null
      }, {
        name: 'deactivateOnEsc',
        type: Boolean,
        default: true
      }, {
        name: 'deactivateOnOutsideClick',
        type: Boolean,
        default: false
      }, {
        name: 'returnFocusOnDeactivate',
        type: Boolean,
        default: true
      }
    ],
    data () {
      return {
        focusTrap: null
      }
    },
    ready () {
      this.initFocusTrap()
    },
    beforeDestroy () {
      this.focusTrap.deactivate()
    },
    methods: {
      initFocusTrap () {
        this.setFocusTrap()

        if (this.active) {
          this.focusTrap.activate()
        }
        if (this.paused) {
          this.focusTrap.pause()
        }
      },
      setFocusTrap () {
        this.$set('focusTrap', createFocusTrap(this.$el, {
          onActivate: this.onActivate,
          onDeactivate: this.onDeactivate,
          initialFocus: this.initialFocus,
          escapeDeactivates: this.deactivateOnEsc,
          clickOutsideDeactivates: this.deactivateOnOutsideClick,
          returnFocusOnDeactivate: this.returnFocusOnDeactivate
        }))
      }
    },
    watch: {
      active (val, oldVal) {
        if (oldVal && !val) {
          this.focusTrap.deactivate()
        } else if (!oldVal && val) {
          this.focusTrap.activate()
        }
      },
      paused (val, oldVal) {
        if (oldVal && !val) {
          this.focusTrap.unpause()
        } else if (!oldVal && val) {
          this.focusTrap.pause()
        }
      },
      onActivate () {
        this.$emit('activated')
      },
      onDeactivate () {
        this.$emit('deactivated')
      }
    }
  }
</script>

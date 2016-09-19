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
        name: 'focusTrapOptions',
        type: Object,
        default: null
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
      this.active = false
    },
    methods: {
      initFocusTrap () {
        this.setFocusTrap()
        this.focusTrap.activate()
      },
      setFocusTrap () {
        this.$set('focusTrap', createFocusTrap(this.$el, this.focusTrapOptions))
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
      }
    }
  }
</script>

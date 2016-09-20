<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">API</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">FocusTrap</h4>
      <h5 class="c-item__sub-heading">Props</h5>
      <app-table class="c-item__table" :data="tables.props"></app-table>
      <h5 class="c-item__sub-heading">Events</h5>
      <app-table class="c-item__table" :data="tables.events"></app-table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        tables: {
          events: [
            {
              name: 'activated',
              type: 'emitted',
              description: 'Fired when the `FocusTrap` is activated.'
            }, {
              name: 'deactivated',
              type: 'emitted',
              description: 'Fired when the `FocusTrap` is deactivated.'
            }
          ],
          props: [
            {
              name: 'active',
              type: '`Boolean`',
              required: false,
              default: '`true`',
              description: 'By default, the `FocusTrap` activates when it mounts (ready hook). So you activate and deactivate it via mounting (render) and unmounting (destroyed). If, however, you want to keep the `FocusTrap` mounted while still toggling its activation state, you can do that with this prop.'
            }, {
              name: 'paused',
              type: '`Boolean`',
              required: false,
              default: '`false`',
              description: 'If you would like to pause or unpause the focus trap (see [focus-trap"s documentation](https://github.com/davidtheclark/focus-trap#focustrappause)), toggle this prop.'
            }, {
              name: 'initialFocus',
              type: '`Element|String`',
              required: false,
              default: '`null`',
              description: 'By default, when a focus trap is activated the first element in the focus trap"s tab order will receive focus. With this option you can specify a different element to receive that initial focus. Can be a DOM node or a selector string (which will be passed to `document.querySelector()` to find the DOM node).'
            }, {
              name: 'deactivateOnEsc',
              type: '`Boolean`',
              required: false,
              default: '`true`',
              description: 'If `false`, the `Escape` key will not trigger deactivation of the focus trap. This can be useful if you want to force the user to make a decision instead of allowing an easy way out.'
            }, {
              name: 'deactivateOnOutsideClick',
              type: '`Boolean`',
              required: false,
              default: '`false`',
              description: 'If `true`, a click outside the focus trap will deactivate the focus trap and allow the click event to do its thing.'
            }, {
              name: 'returnFocusOnDeactivate',
              type: '`Boolean`',
              required: false,
              default: '`true`',
              description: 'If `false`, when the trap is deactivated, focus will not return to the element that had focus before activation.'
            }
          ]
        }
      }
    }
  }
</script>

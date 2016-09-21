```html
<button v-dialog:toggle="form">Open A11Y Dialog</button>
<wv-dialog @closed="active = false" @opened="active = true" ref="form" class="form">
  <wv-focus-trap :active="active" :deactivate-on-outside-click="true">
    <p>Press tab</p>
    <form @submit.prevent="onSubmit">
      <div>
        <input type="text" placeholder="Firstname">
      </div>
      <div>
        <textarea name="name" placeholder="Message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </wv-focus-trap>
</wv-dialog>
```

```js
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    onSubmit () {
      this.$wv.dialog.toggle('form')
    }
  }
}
```

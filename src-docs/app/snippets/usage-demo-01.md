```html
<button @click="mountTrap">mount trap</button>
<wv-focus-trap v-if="isTrapVisible" :active="isTrapActive">
  <p>Here is a focus trap <a href='#!'>with</a> <a href='#!'>some</a> <a href='#!'>focusable</a> parts.</p>
  <button @click="toggleTrap">toggle trap</button>
</wv-focus-trap>
```

```js
export default {
  data () {
    return {
      isTrapVisible: false,
      isTrapActive: true
    }
  },
  methods: {
    mountTrap () {
      this.isTrapVisible = true
    },
    toggleTrap () {
      this.isTrapActive = !this.isTrapActive
    }
  }
}
```

> ## Vue 2

> `$ npm install wovue-focus-trap@next --save`


# FocusTrap

> A Vue component that traps focus

This component is a light wrapper around [focus-trap](https://github.com/davidtheclark/focus-trap), tailored to your Vue-specific needs.

## Live examples & Docs

[https://wovue.github.io/focus-trap](https://wovue.github.io/focus-trap)

## Features

* The focus trap automatically activates on ready hook (by default, though this can be changed).
* The focus trap automatically deactivates on destroyed hook.
* The focus trap can be activated and deactivated, paused and unpaused via props.

## Getting Started

Please read [the focus-trap documentation](https://github.com/davidtheclark/focus-trap#focus-trap) to understand what a focus trap is, what happens when a focus trap is activated, and what happens when one is deactivated.

Install the package using npm

```sh
$ npm install wovue-focus-trap --save
```

Install the plugin

```js
import Vue from 'vue'
import FocusTrap from 'wovue-focus-trap'

Vue.use(FocusTrap)
```

## Basic Usage

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

## Development

``` bash
# install dependencies
npm install

# serve with hot reload src-docs at localhost:8080
npm run dev

# build for production with minification src-docs and src
npm run build

# copy docs folder to gh-pages branch and push
npm run deploy-docs
```

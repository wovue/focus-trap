<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <h4 class="c-item__heading">Demo one</h4>
      <div class="c-item__description">
        <p>Default behavior: When this FocusTrap mounts (ready hook), the first element in its tab order receives focus.</p>
      </div>
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.demo01"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button @click="mountTrap1">activate trap</button>
        <wv-focus-trap v-if="isTrap1Visible" class="box" :active="isTrap1Active">
          <p>Here is a focus trap <a href='#!'>with</a> <a href='#!'>some</a> <a href='#!'>focusable</a> parts.</p>
          <button @click="toggleTrap1">toggle trap</button>
        </wv-focus-trap>
      </div>
    </div>
  </section>
</template>

<script>
  import demo01 from 'src-docs/app/snippets/usage-demo-01.md'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        isTrap1Visible: false,
        isTrap1Active: true,
        snippets: {
          demo01
        }
      }
    },
    methods: {
      mountTrap1 () {
        this.isTrap1Visible = true
      },
      toggleTrap1 () {
        this.isTrap1Active = !this.isTrap1Active
      }
    }
  }
</script>

<style lang="scss">
  .c-play-around {

    .box {
      border: 2px solid #41B883;
      padding: 1rem;
    }

    a,
    button,
    input {
      &:focus {
        outline: 3px solid lightblue;
        transition: none;
      }
    }
  }
</style>

<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Default</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.defaultExample"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="form">Open A11Y Dialog</button>
        <wv-dialog @closed="active = false" @opened="active = true" ref="form" class="form">
          <wv-focus-trap :active="active" :deactivate-on-outside-click="true">
            <p>Press tab</p>
            <form @submit.prevent="onSubmit">
              <div>
                <input tabindex="1" type="text" placeholder="Firstname">
              </div>
              <div>
                <textarea name="name" rows="8" cols="40" placeholder="Message"></textarea>
              </div>
              <button type="submit" name="button">Submit</button>
            </form>
          </wv-focus-trap>
        </wv-dialog>
      </div>
    </div>
  </section>
</template>

<script>
  import defaultExample from 'src-docs/app/snippets/default-example.md'

  export default {
    name: 'ExamplesDefaultPage',
    data () {
      return {
        active: false,
        snippets: {
          defaultExample
        }
      }
    },
    methods: {
      onSubmit () {
        this.$wv.dialog.toggle('form')
      }
    }
  }
</script>

<style lang="scss">
  .form {
    padding: 1rem;

    input,
    textarea {
      border: 2px solid #000;
      margin: .5em 0;
    }

    input,
    textarea,
    button {
      &:focus {
        outline: 3px solid lightblue;
      }
    }
  }
</style>

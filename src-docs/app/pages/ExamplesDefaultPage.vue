<template>
  <section class="c-main__sub-section">
    <h3 class="c-main__sub-heading u-gutter">Default</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.defaultExample"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <div class="c-play-around">
        <button v-dialog:toggle="form-modal">Open A11Y Dialog</button>
        <wv-dialog
          class="form-dialog"
          @closed="active = false"
          @opened="active = true"
          ref="form-modal"
          aria-labelledby="modal-title"
        >
          <wv-focus-trap
            class="form-dialog__content"
            :active="active"
            :deactivate-on-outside-click="true"
          >
            <h1 id="modal-title">Modal title</h1>
            <form @submit.prevent="onSubmit">
              <label>Name: <input required type="text" placeholder="Give me your name"></label>
              <label>Email:<input required type="email" placeholder="Give me your email"></label>
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
  .form-dialog {
    text-align: center;
    max-width: 600px;

    p {
      text-transform: uppercase;
    }

    input,
    textarea {
      border: 2px solid #000;
      display: block;
      margin: 0 auto .5em;
      max-width: 400px;
      width: 100%;
    }

    input,
    textarea,
    button {

      &:focus {
        outline: 3px solid lightblue;
      }
    }
  }

    .form-dialog__content {
      padding: 1rem;
    }
</style>

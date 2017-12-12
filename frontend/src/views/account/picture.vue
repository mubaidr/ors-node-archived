<template lang='pug'>
  div
    vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
</template>

<script>
  export default {
    // TODO: add name to all components
    // TODO: names should be identifieable
    data () {
      return {
        form: {
          model: {
            picture: null
          },
          schema: {
            fields: [
              {
                type: 'image',
                model: 'picture',
                required: true,
                hideInput: true,
                preview: true
              },
              {
                type: 'submit',
                buttonText: 'Save Picture',
                validateBeforeSubmit: true,
                onSubmit: this.onSubmit,
                disabled: this.disableSubmit,
                fieldClasses: 'btn btn-primary btn-block'
              }
            ]
          },
          options: {
            validateAfterLoad: false,
            validateAfterChanged: true
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .field-image {
    .preview {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 240px;
    }
  }
</style>

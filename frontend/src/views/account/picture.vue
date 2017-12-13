<template lang='pug'>
  div
    .text-center
      img(:src='form.model.picture' alt='picture' v-show='form.model.picture' class='avatar-picture')
    vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
</template>

<script>
  export default {
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
        },
        endpoint: '/api/picture'
      }
    },
    methods: {
      onSubmit () {
        this.axios
          .post(this.getEndpoint(), this.form.model)
          .then(() => {
            swal(
              'Success!',
              'Profile picture has been updated successfuly.',
              'success'
            )
          })
          .catch(() => {
            swal('Error', 'Please try again!', 'error')
          })
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
      display: none !important; /* Hide preview */
      height: 240px;
    }
  }
</style>

<template lang='pug'>
  div
    vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
</template>

<script>
  export default {
    data() {
      return {
        form: {
          model: {
            email: ''
          },
          schema: {
            groups: [
              {
                legend: '',
                fields: [
                  {
                    model: 'email',
                    type: 'input',
                    inputType: 'text',
                    label: 'Email',
                    max: 255,
                    required: true,
                    validator: ['required', 'email']
                  },
                  {
                    type: 'submit',
                    buttonText: 'Update Email Address',
                    validateBeforeSubmit: true,
                    onSubmit: this.onSubmit,
                    disabled: this.disableSubmit,
                    fieldClasses: 'btn btn-primary btn-block btn-submit-custom'
                  }
                ]
              }
            ]
          },
          options: {

          }
        }
      }
    },
    created () {
      this.form.model.email = this.user.email
    }
  }
</script>

<style lang='stylus'>
</style>

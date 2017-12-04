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
            password: '',
            confirmPassword: ''
          },
          schema: {
            groups: [
              {
                legend: '',
                fields: [
                  {
                    type: 'input',
                    inputType: 'password',
                    autocomplete: true,
                    label: 'New Password',
                    model: 'password',
                    placeholder: 'Password',
                    min: 8,
                    max: 16,
                    required: true,
                    validator: ['string']
                  },
                  {
                    type: 'input',
                    inputType: 'password',
                    autocomplete: true,
                    label: 'Confirm New Password',
                    model: 'confirmPassword',
                    placeholder: 'Password',
                    min: 8,
                    max: 16,
                    required: true,
                    validator: [
                      'string',
                      function(value, field, model) {
                        return value === model.password
                          ? []
                          : ['Password and Confirm Password fields does not match']
                      }
                    ]
                  },
                  {
                    type: 'submit',
                    buttonText: 'Change password',
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
    }
  }
</script>

<style lang='stylus'>
</style>

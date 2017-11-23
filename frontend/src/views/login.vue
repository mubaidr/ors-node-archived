<template lang="pug">
  .row
    .col-md-6.offset-md-3
      .card.border-light
        .card-header
          h2 Login
          p Please provide username and password to continue
        .card-body
          vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
          br
        .card-footer
          router-link.btn-link(to='/auth/recover') Forgot password?
</template>

<script>
  export default {
    data() {
      return {
        form: {
          model: {
            username: '',
            password: ''
          },
          schema: {
            fields: [
              {
                type: 'cleave',
                autocomplete: true,
                label: 'Username',
                model: 'username',
                cleaveOptions: {
                  numericOnly: true,
                  blocks: [5, 7, 1],
                  delimiter: '-'
                },
                placeholder: '11111-1111111-1',
                min: 15,
                required: true,
                validator: 'regexp',
                pattern: '^[1-9][0-9]{4}-[0-9]{7}-[0-9]{1}$'
              },
              {
                type: 'input',
                inputType: 'password',
                autocomplete: true,
                label: 'Password',
                model: 'password',
                placeholder: 'Password',
                min: 8,
                required: true
              },
              {
                type: 'submit',
                buttonText: 'Login',
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
        loading: true,
        isValid: true
      }
    }
  }
</script>

<style lang="stylus">
</style>

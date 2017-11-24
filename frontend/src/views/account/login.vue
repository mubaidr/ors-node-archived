<template lang='pug'>
  .row
    .col-md-6.offset-md-3
      .card.bg-light
        .card-header.custom
          h2 Login
          span Please provide username and password to continue.
        .card-body
          vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
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
                max: 15,
                required: true,
                validator: ['string']
              },
              {
                type: 'input',
                inputType: 'password',
                autocomplete: true,
                label: 'Password',
                model: 'password',
                placeholder: 'Password',
                min: 8,
                max: 16,
                required: true,
                validator: ['string']
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
        }
      }
    },
    methods: {
      onSubmit() {
        this.$axios
          .post()
          .then(res => {
            this.$store.commit('setAuthentication', res.data)
            swal('Successfuly logged in!', '', 'success')
          })
          .catch(err => {
            swal('Invalid credentials!', 'Please try again!', 'error')
          })
      }
    }
  }
</script>

<style lang='stylus'>
</style>

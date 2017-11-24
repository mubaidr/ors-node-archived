<template lang='pug'>
  .row
    .col-md-6.offset-md-3
      .card.bg-light
        .card-header.custom
          h2 Register
          p Please provide required information to create an account.
        .card-body
          vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
          router-link.btn-link(to='/auth/login') Already have an account?
</template>

<script>
  export default {
    data() {
      return {
        form: {
          model: {
            username: '1111111111111',
            password: 'minion12345'
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
                required: true
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
                buttonText: 'Register',
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
            this.$router.push('/auth/login')
            swal('Account created successfuly!', '', 'success')
          })
          .catch(err => {
            //TODO: parse error information
            console.dir(err)
            swal('Invalid credentials!', err.message, 'error')
          })
      }
    }
  }
</script>

<style lang='stylus'>
</style>

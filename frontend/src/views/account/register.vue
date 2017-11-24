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
            username: '11111-1111111-1',
            password: 'minion12345',
            confirmPassword: 'minion12345',
            email: 'tim@minion.com',
            name: 'Minion'
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
                type: 'input',
                inputType: 'password',
                autocomplete: true,
                label: 'Confirm Password',
                model: 'confirmPassword',
                placeholder: 'Password',
                min: 8,
                max: 16,
                required: true,
                validator: [
                  'string',
                  function(value, field, model) {
                    //TODO: compare with password
                    return ['Invalid']
                  }
                ]
              },
              {
                type: 'input',
                inputType: 'email',
                label: 'Email',
                model: 'email',
                placeholder: 'abc@xyz.com',
                required: true,
                validator: ['string', 'email']
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
            swal('Account created successfuly!', 'Please login', 'success')
          })
          .catch(err => {
            if (err.response.status === 409) {
              this.$router.push('/auth/login')
              swal(
                'Username already registered',
                'Please login or recover password',
                'error'
              )
            } else {
              swal('Invalid submission!', err.message, 'error')
            }
          })
      }
    }
  }
</script>

<style lang='stylus'>
</style>

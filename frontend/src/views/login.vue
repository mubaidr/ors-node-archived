<template lang="pug">
  .row
    .col-md-6.offset-md-3
      .card.bg-light
        .card-header
          h2 Login
          p Please provide username and password to continue
        .card-body
          vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
          br
          router-link.btn-link(to='/auth/recover') Forgot password?
</template>

<script>
  export default {
    data() {
      return {
        form: {
          model: {
            username: '1111111111111',
            password: 'minion1234'
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
        isValid: true
      }
    },
    methods: {
      onSubmit() {
        this.axios
          .post(this.endpoint, this.form.model)
          .then(res => {
            this.$store.commit('setAuthentication', res.data.token)
            this.$store.commit('setUserInfo', res.data.login)
            swal('ok', 'lol', 'success')
          })
          .catch(err => {
            swal('lol', 'sdsd', 'error')
          })
      }
    }
  }
</script>

<style lang="stylus">
</style>

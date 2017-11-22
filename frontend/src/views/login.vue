<template lang="pug">
  div
    h2 Login
    p Please provide username and password to continue
    div.row
      div.col-md-6
        form
          vue-form-generator(:schema='userSchema' :model='userModel')
          button.btn.btn-primary.btn-lg(type='button', onclick='submit()') Login
          router-link.btn.btn-link(to='/auth/recover') Forgot password?
</template>

<script>
  export default {
    data() {
      return {
        userModel: {
          username: '1111111111111',
          password: 'minion1234'
        },
        userSchema: {
          fields: [
            {
              type: 'input',
              inputType: 'text',
              label: 'Username',
              model: 'username',
              placeholder: 'Username'
            },
            {
              type: 'input',
              inputType: 'password',
              label: 'Password',
              model: 'password',
              placeholder: 'Password'
            }
          ]
        }
      }
    },
    methods: {
      submit() {
        alert('lol')
        swal('logging in', 'something', 'error')
      }
    }
  }
</script>

<style lang="stylus">
</style>

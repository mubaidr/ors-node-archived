<template lang='pug'>
  .row
    .col-lg-6.offset-lg-3
      h2 Account
      br
      p Profile picture:
      picture-view
      hr
      p Update your email address:
      email-view
      hr
      p Set a new password for your account:
      password-view
</template>

<script>
  import pictureView from './picture.vue'
  import passwordView from './password.vue'
  import emailView from './email.vue'

  export default {
    components: {
      'picture-view': pictureView,
      'password-view': passwordView,
      'email-view': emailView
    }
  }
</script>

<style lang='stylus'>
</style>

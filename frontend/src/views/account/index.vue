<template lang='pug'>
  .row
    .col-lg-6.offset-lg-3
      h2 Account
      br
      h5 Change your profile picture
      picture-view
      hr
      h5 Update your email address
      email-view
      hr
      h5 Set a new password for your account
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

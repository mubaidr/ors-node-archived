<template lang='pug'>
  div
    header-template(v-if='isAuthenticated')
    header-template-anonymous(v-else)
    .container.body
      transition(appear='' :name='transitionName' mode='out-in')
        router-view
    footer-template
</template>

<script>
  import headerAnonymous from './views/templates/header-anonymous'
  import header from './views/templates/header'
  import footer from './views/templates/footer'

  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'slide-up'
      }
    },
    components: {
      'header-template': header,
      'header-template-anonymous': headerAnonymous,
      'footer-template': footer
    },
    watch: {
      auth(val) {
        if (val !== undefined || val !== null) {
          swal('Successfuly logged in!', 'welcome', 'success')
          this.$router.push('/profile')
        } else {
          swal('You are not logged in!', '', 'error')
          this.$router.push('/home')
        }
      },
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth === fromDepth) {
          this.transitionName = 'slide-up'
        } else {
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      }
    }
  }
</script>

<style lang='stylus'>
</style>

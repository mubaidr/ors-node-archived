<template lang='pug'>
  div
    header-template
    .container.body
      transition(appear='' :name='transitionName' mode='out-in')
        router-view
    footer-template
</template>

<script>
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
      'footer-template': footer
    },
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        if (toDepth === fromDepth) {
          this.transitionName = 'slide-up'
        } else {
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
    }
  }
</script>

<style lang='stylus'>
</style>

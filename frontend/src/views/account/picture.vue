<template lang='pug'>
  h2 picture
</template>

<script>
  export default {
    data () {
      return {
        form: {
          model: {
            picture: null
          },
          schema: {},
          options: {
            validateAfterLoad: false,
            validateAfterChanged: true
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
</style>

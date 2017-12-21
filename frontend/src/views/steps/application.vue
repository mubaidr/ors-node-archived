<template lang='pug'>
  div
    p(class='text-center text-underline')
      |Application for {{vacancy.CAT_DESIG.description + '-' + vacancy.CAT_DESIG.CAT_PAYSCALE.description}}
    br
    h3
      small(class="text-muted") Step {{applicationStep}} of {{applicationSteps}}
    transition-group(name='slide-left' mode='out-in' appear)
      candidate(v-if='applicationStep === 1' key='applicationStep')
</template>

<script>
  import candidate from './candidate.vue'

  export default {
    components: {
      candidate
    },
    computed: {
      vacancy () {
        return this.$store.getters.getVacancy
      }
    }
  }
</script>

<style lang='stylus'>
  .text-underline {
    text-decoration underline
  }
</style>

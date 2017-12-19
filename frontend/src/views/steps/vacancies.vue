<template lang='pug'>
  div
    template(v-if='hasListing')
      p.lead What's your passion? Check out all our open spots below.
      br
      .row
        .col-lg-2.col-md-4(v-for='vacancy in vacancies')
          span.btn.btn-lg.btn-outline-info {{vacancy}}
    template(v-else)
      .alert.alert-warning
        strong
          strong Thank you for your interest.
          br
        |All positions are currently filled. Please visit our site again for future job postings that may relate to your experience and talents.
</template>

<script>
  export default {
    name: 'vacancies',
    data () {
      return {
        vacancies: null,
        endpoint: '/api/vacancy'
      }
    },
    watch: {
      cache (list) {
        this.vacancies = list
      }
    },
    computed: {
      hasListing () {
        return !this.isLoading && this.vacancies && this.vacancies.length > 0
      }
    }
  }
</script>

<style lang='stylus'>
</style>

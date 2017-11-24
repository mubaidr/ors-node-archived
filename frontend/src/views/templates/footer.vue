<template lang='pug'>
  div
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      router-link.navbar-brand(to='/home') ORS
      ul.navbar-nav
        li.nav-item
          router-link.nav-link(to='/home') Home
        li.nav-item
          router-link.nav-link(to='/auth/login') Login
        li.nav-item
          router-link.nav-link(to='/auth/register') Register

</template>

<script>
  export default {
    name: 'footer-template'
  }
</script>

<style lang='stylus'>
</style>


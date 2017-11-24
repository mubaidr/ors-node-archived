<template lang='pug'>
  div
    nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
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
    name: 'header-template'
  }
</script>

<style lang='stylus'>
  @media (max-width: 48em) {
    .navbar {
      .navbar-brand {
        text-align: center;
        width: 100%;
      }

      .navbar-nav {
        text-align: right;
        width: 100%;

        .nav-link {
          display: inline-block;
        }
      }
    }
  }
</style>

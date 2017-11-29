<template lang='pug'>
  nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
    router-link.navbar-brand(to='/home') ORS
    ul.navbar-nav
      li.nav-item
        router-link.nav-link(to='/home') Home
      li.nav-item
        router-link.nav-link(to='/candidate') Profile
      li.nav-item
        router-link.nav-link(to='/auth/logout') Logout
</template>

<script>
  export default {
    name: 'header-template'
  }
</script>

<style lang='stylus'>
</style>

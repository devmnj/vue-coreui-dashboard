<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',

 mounted() {
   this.$store.dispatch('FETCH_DATA')
 },

}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>

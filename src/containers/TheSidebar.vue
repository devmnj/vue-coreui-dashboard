<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
                  <CIcon :height="42" :content="$options.freeSet['cilHospital']"
                  size="custom-size" 
                  class="c-sidebar-brand-full"                    
                  />

      <!-- <CIcon 
         
        content:"$options.brands['cib500px']"
         
     
        viewBox="0 0 556 134"  
      /> -->
      <!-- <CIcon  
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size"         
        :height="35" 
        viewBox="0 0 110 134"
      /> -->
       <CIcon :height="42" :content="$options.freeSet['cilHospital']"
                  size="custom-size" 
                   class="c-sidebar-brand-minimized"                   
                  />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
import { freeSet } from '@coreui/icons'

export default {
  freeSet, 
  name: 'TheSidebar',
  nav,
  mounted() {
    console.log(freeSet);
  

   // console.log(this.$store.getters.GET_STATE_NAV);
   /* nav.push(this.$store.getters.GET_SATE_NAV)
    console.log('Updated Navs are');
     nav.forEach(element => {
        console.log(element);
      });*/
  },
  computed: {
    
    show () {

     
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>

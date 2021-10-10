<template>
  <div id="app">

    <b-container class="bv-example-row">
      <b-row>
          <b-col col-12 lg="3" class="menu_wrapper">
            <Aside />
          </b-col>

          <b-col col-12 xl="9" offset-xl="0" lg="8" offset-lg="1" md="7" offset-md="5" >
            <Page />
          </b-col>
          
      </b-row>
    </b-container>
   
  </div>
</template>

<script>

import Aside from './components/Aside.vue'
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    Aside,
    Page
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #e8e8e8;
  min-height: 100vh;
}
</style>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  }
}

</script>

<template>

  <AppHeader />
  
  <AppMain v-for="(film) in filmList"/>

</template>

<style scoped></style>

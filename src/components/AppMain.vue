<script>
import { state } from '../assets/state.js'
import AppSearchCard from './AppSearchCard.vue';

export default {
  name: 'AppMain',
  components: {
    AppSearchCard
  },
  data() {
    return {
      state
    }
  },

}
</script>

<template>
  <main>
    <AppSearchCard   />
  </main>
</template>

<style scoped></style>
<script>
import {state} from '../assets/state.js'

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

  <AppSearchCard />

</template>

<style scoped>

</style>
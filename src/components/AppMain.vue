<script>
export default {
    name: 'AppMain'
}
</script>

<template>
  <ul v-for="(film, id) in filmList" :key="id">
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua <span><img :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></span></li>
    <li>Voto {{ film.vote_average }}</li>
  </ul>
</template>

<style scoped>

</style>
<script>
import { state } from '../assets/state.js'
import { translate } from '../assets/js_utility/languageToNationConverter.js'


export default {
  name: 'AppSearchCard',
  data() {
    return {
      state
    }
  },
  methods: {
    translatedFlag(language) {
      return translate(language);
    },

    starRating(vote) {
      return state.StarRating(vote);
    }
  }
}

</script>

<template>
  <ul v-for="(film, id) in state.filmList" :key="id">FILM
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua <img :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></li>
    <li>Voto <span v-html="starRating(film.vote_average)"></span></li>
    <li><img :src="'https://image.tmdb.org/t/p/w342/' + film.poster_path"></li>
  </ul>

  <hr>

  <ul v-for="(serie, id) in state.seriesList" :key="id">SERIE
    <li>titolo {{ serie.name }}</li>
    <li>titolo originale {{ serie.original_name }}</li>
    <li>Lingua <img :src="'https://flagcdn.com/16x12/' + translatedFlag(serie.original_language) + '.webp'"></li>
    <li>Voto <span v-html="starRating(serie.vote_average)"></span></li>
    <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path">
  </ul>
</template>

<style scoped></style>
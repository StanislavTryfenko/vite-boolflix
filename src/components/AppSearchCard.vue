<script>
import { state } from '../assets/state.js'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'AppSearchCard',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      state
    }
  },
  methods: {
    translatedFlag(language) {
      return state.translatedFlag(language);
    },

    starRating(vote) {
      return state.StarRating(vote);
    }
  },
  options:{
    slidesToScroll:5,
  }
}

</script>

<template>
  <h2>SEARCHED FILMS:</h2>
  <carousel :items-to-show="5" :wrap-around="true" :itemsToScroll="4" :transition="1000">
    <slide v-for="(film) in state.filmList" :key="slide" :optios="options">
      <img :src="'https://image.tmdb.org/t/p/w342/' + film.poster_path">
      <h2>Title:{{ film.title }}</h2>
      <h3>Original Title: {{ film.original_title }}</h3>
      <h3>Original Language: <img
          :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></h3>
      <h3>Vote: <span v-html="starRating(film.vote_average)"></span></h3>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

  <h2>SEARCHED SERIES:</h2>
  <carousel :items-to-show="5" :wrap-around="true" :itemsToScroll="4" :transition="1000">
    <slide v-for="(serie) in state.seriesList" :key="slide" :optios="options">
      <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path">
      <h2>Title:{{ serie.title }}</h2>
      <h3>Original Title: {{ serie.original_title }}</h3>
      <h3>Original Language: <img
          :src="'https://flagcdn.com/16x12/' + translatedFlag(serie.original_language) + '.webp'"></h3>
      <h3>Vote: <span v-html="starRating(serie.vote_average)"></span></h3>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style scoped></style>
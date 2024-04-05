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
      state,
      overingId: null,
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
}

</script>

<template>
  <!-- Film carousel -->
  <div v-if="(state.filmList.length > 0)">
    <h2>SEARCHED FILMS:</h2>
    <carousel :items-to-show="5" :wrap-around="(state.filmList.length > 5)" :itemsToScroll="4" :transition="1000">
      <slide v-for="(film, index) in state.filmList" :key="index">
        <div class="info" v-show="(overingId == film.id)" @mouseover="overingId = film.id"
          @mouseleave="overingId = null">
          <h4>Title:<span>{{ film.title }}</span></h4> 
          <h4>Original Title:<span>{{ film.original_title }}</span></h4>
          <h4>Original Language: <img
              :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></h4>
          <h4>Vote: <span v-html="starRating(film.vote_average)"></span></h4>
          <h4>Overview:<span>{{ film.overview }}</span></h4>
        </div>

        <img :src="'https://image.tmdb.org/t/p/w342/' + film.poster_path" @mouseover="overingId = film.id"
          @mouseleave="overingId = null">
      </slide>

      <template #addons>
        <navigation v-if="(state.filmList.length > 5)" />
        <pagination v-if="(state.filmList.length > 5)" />
      </template>
    </carousel>
  </div>

  <!-- Serie carousel -->
  <div v-if="(state.seriesList.length > 0)">
    <h2>SEARCHED SERIES:</h2>
    <carousel :items-to-show="5" :wrap-around="(state.seriesList.length > 5)" :itemsToScroll="4" :transition="1000">
      <slide v-for="(serie, index) in state.seriesList" :key="index">
        <div class="info" v-show="(overingId == serie.id)" @mouseover="overingId = serie.id"
          @mouseleave="overingId = null">
          <h4>Title:{{ serie.name }}</h4>
          <h4>Original Title: {{ serie.original_name }}</h4>
          <h4>Original Language: <img
              :src="'https://flagcdn.com/16x12/' + translatedFlag(serie.original_language) + '.webp'">
          </h4>
          <h4>Vote: <span v-html="starRating(serie.vote_average)"></span></h4>
          <h4>Overview:<span>{{ serie.overview }}</span></h4>
        </div>

        <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path" @mouseover="overingId = serie.id"
          @mouseleave="overingId = null">
      </slide>

      <template #addons>
        <navigation v-if="(state.seriesList.length > 5)" />
        <pagination v-if="(state.seriesList.length > 5)" />
      </template>
    </carousel>
  </div>
</template>

<style scoped>

</style>
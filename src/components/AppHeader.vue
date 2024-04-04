<script>
import { state } from '../assets/state.js'
import axios from 'axios';
import { translate } from '../assets/languageToNationConverter.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      searchBarText: '',
      filmList: [],
    }
  },
  methods: {
    searchBar() {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: { query: this.searchBarText },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTliZWVjNDEzN2I1YjJmYTA0MjMwOWQzNWEwYjU2YyIsInN1YiI6IjY2MGQwZjJmYzhhNWFjMDE3YzdhZDY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iR7fxDnVDZM1HjmgE6cwSw_oX2I1k3i4gJrUXVGZ4_E'
        }
      }
      axios.request(options)
        .then(response => {
          this.filmList = response.data.results;
          console.log(response);
          console.log(this.filmList);
        })
    },

    translatedFlag(language) {
      return translate(language);
    }
  },

}
</script>

<template>
  <input type="text" name="" id="" @keyup.enter="searchBar()" v-model="searchBarText">
  <ul v-for="(film, id) in filmList" :key="id">
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua <span><img :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></span></li>
    <li>Voto {{ film.vote_average }}</li>
  </ul>
</template>

<style scoped></style>
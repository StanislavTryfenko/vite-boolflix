<script>
import axios from 'axios';
import { translate } from '../assets/js_utility/languageToNationConverter.js'

export default {
  name: 'AppHeader',
  data() {
    return {
      searchBarText: '',
      filmList: [],
      seriesList: [],
    }
  },
  methods: {
    searchBar() {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi',
        params: { query: this.searchBarText },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTliZWVjNDEzN2I1YjJmYTA0MjMwOWQzNWEwYjU2YyIsInN1YiI6IjY2MGQwZjJmYzhhNWFjMDE3YzdhZDY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iR7fxDnVDZM1HjmgE6cwSw_oX2I1k3i4gJrUXVGZ4_E'
        }
      }
      axios.request(options)
        .then(response => {
          const results = response.data.results;

          this.filmList = results.filter(item => item.media_type === 'movie');
          this.seriesList = results.filter(item => item.media_type === 'tv');
        
          //console.log(response);
          //console.log(this.filmList, this.seriesList);
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

   <ul v-for="(film, id) in filmList" :key="id">FILM
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua <span><img :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></span></li>
    <li>Voto {{ film.vote_average }}</li>
  </ul>

<hr>

  <ul v-for="(serie, id) in seriesList" :key="id">SERIE
    <li>titolo {{ serie.name }}</li>
    <li>titolo originale {{ serie.original_name }}</li>
    <li>Lingua <span><img :src="'https://flagcdn.com/16x12/' + translatedFlag(serie.original_language) + '.webp'"></span></li>
    <li>Voto {{ serie.vote_average }}</li>
  </ul>
  
</template>

<style scoped></style>
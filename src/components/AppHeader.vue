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

          //splitting series & films
          this.filmList = results.filter(item => item.media_type === 'movie');
          this.seriesList = results.filter(item => item.media_type === 'tv');

          console.log(response);
          //console.log(this.filmList, this.seriesList);
        })
    },

    translatedFlag(language) {
      return translate(language);
    },

     starRating(vote) {
      //riciclato il codice dell'esercizio debudding di adriano e modificato
      let ratingString = '';

      //in this way i will always have a round at 0.5 positive as asked
      const rating = Math.ceil(vote * 2) / 4;

      for (let i = 1; i <= rating; i++) {
        ratingString += '<i class="fa-solid fa-star"></i>';
      }
      if (rating - parseInt(rating) > 0.5) {
        ratingString += '<i class="fa-regular fa-star-half-stroke"></i>';
      }
      for (let i = rating; i < 4.75; i++) {
        ratingString += '<i class="fa-regular fa-star"></i>';
      }

      return ratingString 
    }
  },
}
</script>

<template>
  <input type="text" name="" id="" @keyup.enter="searchBar()" v-model="searchBarText">

  <ul v-for="(film, id) in filmList" :key="id">FILM
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua <img :src="'https://flagcdn.com/16x12/' + translatedFlag(film.original_language) + '.webp'"></li>
    <li>Voto <span v-html="starRating(film.vote_average)"></span></li>
    <li><img :src="'https://image.tmdb.org/t/p/w342/' + film.poster_path"></li>
  </ul>

  <hr>

  <ul v-for="(serie, id) in seriesList" :key="id">SERIE
    <li>titolo {{ serie.name }}</li>
    <li>titolo originale {{ serie.original_name }}</li>
    <li>Lingua <img :src="'https://flagcdn.com/16x12/' + translatedFlag(serie.original_language) + '.webp'"></li>
    <li>Voto <span v-html="starRating(serie.vote_average)"></span></li>
    <img :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path">
  </ul>

</template>

<style scoped></style>
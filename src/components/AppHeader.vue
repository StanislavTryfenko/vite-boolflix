<script>
import { state } from '../assets/state.js'
import axios from 'axios';

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
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzA3NDc4MTljYjljM2YwNDVmYjNjMTAxYTU1ZTZlMSIsInN1YiI6IjY2MGQwZjJmYzhhNWFjMDE3YzdhZDY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2hm9xILiqLXjZ-QbnYhNfhSVDLUSlSz85smKDgNCnW0'
        }
      }
      axios.request(options)
        .then(response => {
          this.filmList = response.data.results;
          console.log(response);
          console.log(this.filmList);
        })
    },
  }
}
</script>

<template>
  <input type="text" name="" id="" @keyup.enter="searchBar()" v-model="this.searchBarText">
  <ul v-for="(film, id) in filmList" :key="id">
    <li>titolo {{ film.title }}</li>
    <li>titolo originale {{ film.original_title }}</li>
    <li>Lingua {{ film.original_language }}</li>
    <li>Voto {{ film.vote_average }}</li>
  </ul>
</template>

<style scoped></style>
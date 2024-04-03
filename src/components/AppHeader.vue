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
      axios.get(`https://api.themoviedb.org/3/movie/550?api_key=3c0747819cb9c3f045fb3c101a55e6e1&query=${this.searchBarText}`)
        .then(response => {
          this.filmList = response.data;
          console.log(response);
          console.log(this.filmList);
        })
    },
  }
}
</script>

<template>
  <input type="text" name="" id="" @keyup.enter="searchBar()" v-model="this.searchBarText">
  <ul>
    <li>titolo</li>
    <li>titolo originale</li>
    <li>Lingua</li>
    <li>Voto</li>
  </ul>
</template>

<style scoped></style>
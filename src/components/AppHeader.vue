<script>
import { state } from '../assets/state.js'
import axios from 'axios';

export default {
  name: 'AppHeader',
  data() {
    return {
      state
    }
  },
  methods: {
    searchBar() {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi',
        params: { query: state.searchBarText },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTliZWVjNDEzN2I1YjJmYTA0MjMwOWQzNWEwYjU2YyIsInN1YiI6IjY2MGQwZjJmYzhhNWFjMDE3YzdhZDY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iR7fxDnVDZM1HjmgE6cwSw_oX2I1k3i4gJrUXVGZ4_E'
        }
      }
      axios.request(options)
        .then(response => {
          const results = response.data.results;

          //splitting series & films
          state.filmList = results.filter(item => item.media_type === 'movie');
          state.seriesList = results.filter(item => item.media_type === 'tv');

          //console.log(response);
          console.log(state.filmList, state.seriesList);
        })
    },
  },
}
</script>

<template>
  <header>
    <div class="nav">
      <div class="logo">BOOFLIX</div>
      <button>Home</button>
      <button>Series</button>
      <button>Movie</button>
    </div>

    <div class="searcher">
      <label for="inputSearch"><i class="fa-solid fa-magnifying-glass"></i></label>
      <input type="text" name="inputSearch" id="" @keyup.enter="searchBar()" v-model="state.searchBarText">
    </div>
  </header>
</template>

<style scoped></style>
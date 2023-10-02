<script>
import {store} from "../store.js";
import MovieItem from "./MovieItem.vue";

export default {
  name: "AppMovies",


  data() {
    return {
      store,
      language: "",

    }
  },

  components: {
    MovieItem,

  },

  methods: {
    checkLanguageFlag(flag) {
      if (flag == "en") {
        flag = "gb";
      } else if (flag == "ja") {
        flag = "jp"
      } else if (flag == "cs") {
        flag = "ch";
      } else if (flag == "hi") {
        flag = "hn";
      } else if (flag == "el") {
        flag = "gr";
      }
      return flag;
    },

    convertNumber(number) {
      const newNumber = Math.floor(Math.ceil(Number(number / 2)));
      this.store.moviesStarsVote = newNumber;
      return newNumber;
    },

    scrollToLeft() {
      document.querySelector(".movie-container").scrollBy({
        left: 550, 
        behavior: "smooth"
      })
    },

    scrollToRight() {
      document.querySelector(".movie-container").scrollBy({
        left: -550, 
        behavior: "smooth"
      })
    }

    
  },

}
</script>
   
<template>
  <h2 class="title movies-title">Movies</h2>
  <p class="results" v-if="store.showJumbo == false">Risultati trovati: {{ store.MoviesResultsNumber }}</p>

  <div class="main-container">
    <div class="card-container movie-container">
      <MovieItem v-if="this.store.movies.length > 0" v-for="(movie, index) in store.movies"
      :index="index"
      :movie-image="store.imageAddress + movie.poster_path" 
      :movie-title="movie.title"
      :movie-original-title="movie.original_title"
      :movie-flag="this.store.flagAddress + checkLanguageFlag(movie.original_language) + '.png'"
      :movie-vote="convertNumber(movie.vote_average)"
      :movie-overview="movie.overview">
      </MovieItem>

      <p v-else class="noResult-advise">Nessun risultato</p>

      <div class="scroll-arrow-left" @click="scrollToRight()">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="scroll-arrow-right" @click="scrollToLeft()">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
 </div>
  </div>


</template>

<style lang="scss" scoped>
    

 
</style>

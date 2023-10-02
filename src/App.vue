<script>

import {store} from "../src/store.js";
import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppMovies from "./components/AppMovies.vue";
import AppSeries from "./components/AppSeries.vue";
import axios from "axios";
import { createStructuralDirectiveTransform } from "@vue/compiler-core";

export default {
  data() {
    return {
      store,

    }
  },

  created() {

        // GET THE LIST OF 20 MOVIES
    axios.get(store.firstAPIcall).then((res)=> {
        this.store.movies = res.data.results;


        // GET THE IDs OF THE LIST OF MOVIES
        this.store.movies.forEach(el =>{
          this.store.moviesID = el.id;
          // console.log(this.store.moviesID)
        })
       })

       this.store.movies.forEach((movie) =>{
        axios.get(store.castCallFirstPart + movie.id + store.castCallSecondPart).then((res)=> {
         this.store.castResult = res.data.cast

         const newarray = this.store.castResult.slice(0, 5)
         this.store.finalResult = newarray

         console.log(this.store.finalResult)
          newarray.forEach(element => {
            console.log(element.name)
          });
         console.log(this.store.castResult)
        })
       })

        // GET THE LIST OF 20 SERIES
    axios.get(store.secondaAPIcall).then((res)=> {
      this.store.series = res.data.results;
    })  
    


  },

  components: {
    AppHeader,
    AppJumbo,
    AppMovies,
    AppSeries,
  },

  methods: {

    searchTitle() {
      let newMoviesList = this.store.APIcall + this.store.APIquery + this.store.inputValue;

      axios.get(newMoviesList).then((res)=> {
        this.store.movies = res.data.results;
        this.store.showJumbo = false;
        this.store.MoviesResultsNumber = res.data.results.length;
      })


      let newSeriesList = this.store.APIcall2 + this.store.APIquery + this.store.inputValue;

      axios.get(newSeriesList).then((res)=> {
        this.store.series = res.data.results;
        this.store.showJumbo = false;
        this.store.SeriesResultsNumber = res.data.results.length;
      })
    },
  }
}
</script>

<template>
  <AppHeader @prevPage="goPrevPage()" @nextPage="goNextPage()" @searchClicked="searchTitle()"></AppHeader>
  <AppJumbo></AppJumbo>
  <AppMovies></AppMovies>
  <AppSeries></AppSeries>
</template>

<style lang="scss" scoped>
</style>

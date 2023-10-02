<script>
import {store} from "../store.js";
import SeriesItem from "./SeriesItem.vue";

export default {
  name: "AppSeries",



  data() {
    return {
      store,
      language: "",
      emits: ["searchSeries"],


    }
  },

  components: {
    SeriesItem,
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
      this.store.seriesStarsVote = newNumber;
      return newNumber;
    },

    scrollToLeft() {
      document.querySelector(".series-container").scrollBy({
        left: 550, 
        behavior: "smooth"
      })
    },

    scrollToRight() {
      document.querySelector(".series-container").scrollBy({
        left: -550, 
        behavior: "smooth"
      })
    }

  }
}
</script>
   
<template>
 <h2 class="title">TV Series</h2>
 <p class="results" v-if="store.showJumbo == false">Risultati trovati: {{ store.SeriesResultsNumber }}</p>

 <div class="main-container">

    <div class="card-container series-container">
        <SeriesItem v-if="this.store.series.length > 0" v-for="serie in store.series"
          :serie-image="store.imageAddress + serie.poster_path"
          :serie-title="serie.name"
          :serie-original-title="serie.original_name"
          :serie-flag="this.store.flagAddress + checkLanguageFlag(serie.original_language) + '.png'"
          :serie-vote="convertNumber(serie.vote_average)"
          :serie-overview="serie.overview">
        ></SeriesItem>
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

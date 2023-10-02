<script>
import {store} from "../store.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.css';



export default {
  name: "SeriesItem",


  data() {
    return {
      store,
    }
  },

  methods: {
    showDetails(event) {
    const activeCards = document.querySelectorAll('.active');
    activeCards.forEach(card => {
      if (card != event.currentTarget) {
        card.classList.remove('active');
      }
    });
      event.currentTarget.classList.toggle('active');
    },


    checkImage(image) {
      if(image == "https://image.tmdb.org/t/p/w342null") {
        return "https://th.bing.com/th/id/R.ea411ebf6153f5f3201aa5a134949f3e?rik=TMsZisGUrPRPSA&pid=ImgRaw&r=0"
      } else {
        return image
      }
    },

    
    
  },

  props: {
    serie: Object,
    serieImage: String,
    serieTitle: String,
    serieOriginalTitle: String,
    serieFlag: String,
    serieVote: String,
    serieOverview: String,
  }
}
</script>
   
<template>
 <div class="card" @click="showDetails($event)">
    <img :src="checkImage(serieImage)" alt="img-poster">
    <div class="card-content">
        <h3 class="card-title">{{ serieTitle }}</h3>
        <h4 class="original-title">Titolo Originale: <br>{{ serieOriginalTitle }}</h4>
        <p>Lingua originale</p>
        <img class="country-flag" :src="serieFlag">
        <div class="stars">
          <i v-for="star in store.seriesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i><i v-for="star in 5 - store.seriesStarsVote" class="fa-solid fa-star vote" style="color: white;"></i>
        </div>
        <p class="overview">{{serieOverview}}</p>
  </div>
 </div>

</template>

<style lang="scss" scoped>
.overview {
  font-size: .8em;
}

</style>

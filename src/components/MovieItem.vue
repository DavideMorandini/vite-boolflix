<script>
import {store} from "../store.js";
import '@fortawesome/fontawesome-free/css/all.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
  name: "MovieItem",


  data() {
    return {
      store,
      language: "",
      
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
    }
  },

  props: {
    movie: Object,
    index: Number,
    movieImage: String,
    movieTitle: String,
    movieOriginalTitle: String,
    movieFlag: String,
    movieVote: String,
    movieOverview: String,
    movieID: String,
  },
  

}
</script>
   
<template>
 <div class="card"  @click="showDetails($event)">
    <img :src="checkImage(movieImage)" alt="img-poster">
    <div class="card-content">
        <h3 class="card-title">{{ movieTitle }}</h3>
        <h4 class="original-title">Titolo Originale: <br>{{ movieOriginalTitle }}</h4>
        <p>Lingua originale</p>
        <img class="country-flag" :src="movieFlag">
        <div class="stars">
          <i v-for="star in store.moviesStarsVote" class="fa-solid fa-star vote" style="color: #ffc31f;"></i><i v-for="star in 5 - store.moviesStarsVote" class="fa-solid fa-star vote" style="color: white;"></i>
        </div>
        <p class="overview">{{movieOverview}}</p>
    </div> 
 </div>

</template>

<style lang="scss" scoped>


.overview {
  font-size: .8em;
}

</style>

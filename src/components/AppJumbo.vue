<script>
import {store} from "../store.js";

export default {
  name: "AppJumbo",


  data() {
    return {
      store,

    }
  },

  components: {

  },

  methods: {
    randomImage() {
    }
  },

}
</script>


<template>
    <div class="container" v-if="this.store.showJumbo">
        <img src="/public/images/jumbowallpaper.jpg" alt="jumbo-img">
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 850px;

        &:hover img {
                transform:scale(1.1);
            }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0 -15% ;

            filter: saturate(60%);
            filter: opacity(85%);

            box-shadow: 10px 10px 40px rgba($color: #00000071, $alpha: 1.0);
            transition: all 1s ease-in-out;
            scale: 1;
        
            pointer-events: none;

          
        }
    }
</style>

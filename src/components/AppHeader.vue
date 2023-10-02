<script>
import {store} from "../store.js";

export default {
  name: "AppHeader",

  data() {
    return {
      store,
      emits: ["searchClicked", "prevPage", "nextPage"],


    }
  },
}
</script>
   
<template>
 <div id="header">    
    <div id="input-container">
        <input v-model="store.inputValue" @keyup.enter="$emit('searchClicked');" type="text" placeholder="Cerca">
        <button class="goButton" @click="$emit('searchClicked');">Vai</button>
    </div>
    
 </div>

</template>

<style lang="scss" scoped>
    #header {
        display: flex;
        justify-content: space-around;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.977);
        width: 100%;
        height: 100px;

        position: fixed;
        z-index: 100;

        #logo {
          cursor: pointer;
        }

    }
</style>

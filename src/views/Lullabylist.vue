<template>
  <div class="text-black text-3xl justify-center stroke-current">
    <!-- <Emotion/> -->
    <!-- <NavBar/> -->
    <emotion :emotionss="emotions"></emotion>
  </div>
</template>
<script>

//ผมใช้ axios ในการ -get-post-put-and-delete ครับ yarn add axios ref.จากเว็บที่เอามาใช้
//https://www.npmjs.com/package/axios
//https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

import emotion from "@/components/Emotion.vue";
const axios = require("axios");

export default {
  created() {
    this.fetchdata();
  },

  components: {
    
    emotion,
  },

  data() {
    return {
      emotions: [],
      url: "http://localhost:3000/emotions",
    };
  },

  methods: {
    fetchdata() {
      axios
        .get(this.url)
        .then((response) => {
          this.emotions = response.data;
          console.log(this.emotions);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>
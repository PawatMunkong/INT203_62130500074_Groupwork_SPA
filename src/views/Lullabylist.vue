<template>
  <div class="text-black text-3xl justify-center stroke-current">
    <!-- <Emotion/> -->
    <!-- <NavBar/> -->
    <emotion :emotionss="emotions" @delete="deleteemotion($event)" ></emotion>
  </div>
</template>
<script>
//ผมใช้ axios ในการทำ -get-post-put-and-delete ครับ yarn add axios ref.จากเว็บที่เอามาใช้
//https://www.npmjs.com/package/axios
//https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

import emotion from "@/components/Emotion.vue";
const axios = require("axios");

export default {
  created() {
    this.dataget();
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
    dataget() {
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
    deleteemotion(id) {
      axios
        .delete(this.url + "/" + id)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.emotions = this.emotions.filter(
            (emotionss) => emotionss.id !== id
          );
        });
    },
  },
};
</script>
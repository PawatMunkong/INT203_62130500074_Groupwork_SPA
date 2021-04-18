<template>
  <div class="text-black text-3xl justify-center stroke-current">
    <!--  -->
    <emotion
      :emotionss="emotions"
      :emotionss2="emotions2"
      @delete="deleteemotion($event)"
      @delete2="deleteemotion2($event)"
    ></emotion>

    <!-- <Emotion/> -->
    <!-- <NavBar/> -->
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
    this.dataget2();
  },

  components: {
    emotion,
  },

  data() {
    return {
      emotions: [],
      //emotions2
      emotions2: [],
      url2: "http://localhost:3000/emotions2",
      //emotions
      url: "http://localhost:3000/emotions",
    };
  },

  methods: {
    //GOOD
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
    //BAD
    dataget2() {
      axios
        .get(this.url2)

        .then((response) => {
          this.emotions2 = response.data;
          console.log(this.emotions2);
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //deleteemotion GOOD
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
    //deleteemotion2 BAD
    deleteemotion2(id) {
      axios
        .delete(this.url2 + "/" + id)

        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          this.emotions2 = this.emotions2.filter(
            (emotionss2) => emotionss2.id !== id
          );
        });
    },
  },
};
</script>
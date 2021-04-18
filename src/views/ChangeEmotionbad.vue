<template>
  <div class="ChangeEmotionbad">
    <div class="text-black text-3xl justify-center stroke-current">
      <div class="pl-80 py-12 ml-60">
        <p class="font-extrabold text-5xl">ChangeEmotion</p>
      </div>
      <div class="px-16 ml-96">
        <p class="font-extrabold text-2xl">
          Oops!! Are you sure it will change your feelings?
        </p>
      </div>
     
      <!--  -->
      <div class="pt-9 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="updatem2.detail2" rows="2" id="detail2"></textarea>

        <router-link to="/LullaList">
          <button
            class="mt-4 px-4 py-2 bg-yellow-600 text-white text-sm uppercase font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
            @click="updateemotion2"
          >
            GOOD
          </button>
        </router-link>
      </div>
      <!-- emotion GOOD -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";

//ผมใช้ axios ในการ -get-post-put-and-delete ครับ yarn add axios ref.จากเว็บที่เอามาใช้
//https://www.npmjs.com/package/axios
//https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

const axios = require("axios");

export default {
  created() {
    this.dataget2();
  },

  props: {
    ce2: {
      require: true,
      type: String,
    },
  },

  data() {
    return {
      //

      //
      emotionss2: [],
      updatem2: {
        detail2: "",
        id: "",
      },
      //

      //
      url2: "http://localhost:3000/emotions2/",
    };
  },

  methods: {
    dataget2() {
      axios
        .get(this.url2 + this.$route.params.ce2)
        .then((response) => {
          this.emotionss2 = response.data;
          console.log(response.data);
          return response.data;
        })
        .then(() => {
          this.updatem2.detail2 = this.emotionss2.detail2;
          console.log(this.updatem2.detail2);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateemotion2() {
      let changes2 = {
        detail2: this.updatem2.detail2,
      };
      axios
        .put(this.url2 + this.$route.params.ce2, changes2)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.emotionss2 = changes2;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
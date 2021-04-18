<template>
  <div class="ChangeEmotion">
    <div class="text-black text-3xl justify-center stroke-current">
      <div class="px-72 py-12 ml-96">
        <p class="font-extrabold text-5xl">ChangeEmotion</p>
      </div>
      <div class="px-16 ml-96">
        <p class="font-extrabold text-2xl">
          Oops!! Are you sure it will change your feelings?
        </p>
      </div>
      <div class="px-32 ml-96">
        <p class="font-extrabold text-2xl">
          Can be replaced at a time!
        </p>
      </div>
        <!-- emotion GOOD -->
      <div class="pt-9 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="updatem.detail" rows="2" id="detail"></textarea>

        <router-link to="/LullaList">
          <button
            class="mt-4 px-4 py-2 bg-green-500 text-white text-sm uppercase font-medium rounded hover:bg-green-400 focus:outline-none focus:bg-green-400"
            @click="updateemotion"
          >
            GOOD
          </button>
        </router-link>
      </div>
      <!-- emotion GOOD -->
      <div class="pt-6 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail2" rows="2" id="detail2"></textarea>

        <button
          class="mt-4 px-4 py-2 bg-yellow-600 text-white text-sm uppercase font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          @click.prevent="submitemotion2"
        >
          GOOD
        </button>
      </div>
       <!-- emotion GOOD -->
      <div class="pt-6 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail2" rows="2" id="detail2"></textarea>

        <button
          class="mt-4 px-4 py-2 bg-red-700 text-white text-sm uppercase font-medium rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          @click.prevent="submitemotion3"
        >
          GOOD
        </button>
      </div>
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
    this.dataget();
  },

  props: {
    ce: {
      require: true,
      type: String,
    },
  },

  data() {
    return {
      emotionss: [],
      updatem: {
        detail: "",
        id: "",
      },
      url: "http://localhost:3000/emotions/",
    };
  },

  methods: {
    dataget() {
      axios
        .get(this.url + this.$route.params.ce)
        .then((response) => {
          this.emotionss = response.data;
          console.log(response.data);
          return response.data;
        })
        .then(() => {
          this.updatem.detail = this.emotionss.detail;
          console.log(this.updatem.detail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateemotion() {
      let changes = {
        detail: this.updatem.detail,
      };
      axios
        .put(this.url + this.$route.params.ce, changes)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.emotionss = changes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

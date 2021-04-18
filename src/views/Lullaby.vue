<template>
  <div class="Lullaby">
    <div class="text-black text-3xl justify-center stroke-current">
      <div class="pl-80 py-12 ml-96">
        <p class="font-extrabold text-5xl">Lullaby</p>
      </div>
      <div class="px-16 ml-96">
        <p class="font-extrabold text-2xl">
          Write according to your feelings and emotions.
        </p>
      </div>
      <div class="px-32 ml-96">
        <p class="font-extrabold text-2xl">
          Choose to write green, yellow,  write only one !
        </p>
      </div>
      <!-- emotion GOOD -->
      <div class="pt-9 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail" rows="2" id="detail"></textarea>
        <button
          class="mt-4 px-4 py-2 bg-green-500 text-white text-sm uppercase font-medium rounded hover:bg-green-400 focus:outline-none focus:bg-green-400"
          @click.prevent="submitemotion"
        >
          GOOD
        </button>
      </div>
        <!-- emotion GOOD -->
        <div class="pt-6 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail2" rows="2" id="detail2"></textarea>
        <button
          class="mt-4 px-4 py-2 bg-yellow-600 text-white text-sm uppercase font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          @click.prevent="submitemotion2"
        >
          BAD
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
  
  data(){
    return{
      //
     detail2: '',
      url2:'http://localhost:3000/emotions2',
     //
      detail: '',
      url:'http://localhost:3000/emotions',
      
    }
  },

  methods:{
    submitemotion(){
      axios.post(this.url,{
 
        detail: this.detail
      }).then((response) => {
        return response.data
      }).then(() => {
       
        this.detail= ''
        setTimeout(() => {
          this.$router.push('LullaList')
        }, 250);
      }).catch((error) => {
        console.log(error)
      })
    },
//
 submitemotion2(){
      axios.post(this.url2,{
 
        detail2: this.detail2
      }).then((response) => {
        return response.data
      }).then(() => {
       
        this.detai2= ''
        setTimeout(() => {
          this.$router.push('LullaList')
        }, 250);
      }).catch((error) => {
        console.log(error)
      })
    }
  }
  //

};
</script>

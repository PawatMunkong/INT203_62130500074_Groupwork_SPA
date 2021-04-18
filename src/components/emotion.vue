<template>

  <div class="text-black text-3xl justify-center stroke-current">
    <div class="px-72 py-12 ml-96">
      <p class="font-extrabold text-5xl">Lullaby list</p>
    </div>
  </div>


  <div class="pl-24 flex flex-row flex-wrap  box-border ">
    
    <div class=" mx-6  " v-for="em in emotionss" :key="em.id">
     
      <div class="overflow-hidden shadow-md mb-10 ">
        <div class=" p-6 border-gray-200  bg-white"  >
          {{ em.detail }}
        </div>
        <!-- Test -->
        <div class="p-6 bg-white">
        
          <button class=" mt-16  mx-10 px-4 py-2 bg-blue-600 text-white 
          text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >Edit</button>

         <button class=" mt-16 mx-10 px-4 py-2 bg-red-600 text-white text-sm uppercase 
         font-sans rounded hover:bg-red-500 focus:outline-none focus:bg-red-500" 
         @click="$emit('delete',em.id)">
              DELETE
            </button>

        </div>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'Emotion',
  props: ['emotionss'],
  emits:['delete','edit']
};

</script>

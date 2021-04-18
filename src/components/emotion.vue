<template>
  <div class="text-black text-3xl justify-center stroke-current">
    <div class="pl-80 py-12 ml-96">
      <p class="font-extrabold text-5xl">Lullaby list</p>
    </div>
  </div>

  <div class="pl-24 flex flex-row flex-wrap box-border">
    <div class="mx-6" v-for="em in emotionss" :key="em.id">
      <div class="overflow-hidden shadow-md mb-10">
        <div class="p-6 border-gray-300  bg-green-200">
          {{ em.detail }}
        </div>
        <!-- Test box -->
        <div class="p-6 bg-green-200">
          <router-link :to="{ name: 'Change', params: { ce: em.id } }">
            <button
              class="mt-16 mx-10 px-4 py-2 bg-blue-500 text-white text-sm uppercase font-medium rounded hover:bg-blue-600 focus:outline-none "
            >
              EDIT
            </button></router-link
          >

          <button
            class="mt-16 mx-10 px-4 py-2 bg-red-500 text-white text-sm uppercase font-sans rounded hover:bg-red-600 focus:outline-none "
            @click="$emit('delete', em.id)"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
    <!-- Test d2 -->
    <div class="mx-6" v-for="em2 in emotionss2" :key="em2.id">
      <div class="overflow-hidden shadow-md mb-10">
        <div class="p-6 border-gray-300 bg-yellow-200">
          {{ em2.detail2 }}
        </div>

        <div class="p-6 bg-yellow-200">
          <router-link :to="{ name: 'Change2', params: { ce2: em2.id } }">
            <button
              class="mt-16 mx-10 px-4 py-2 bg-blue-500 text-white text-sm uppercase font-medium rounded hover:bg-blue-600 focus:outline-none "
            >
              EDIT
            </button></router-link
          >

          <button
            class="mt-16 mx-10 px-4 py-2 bg-red-600 text-white text-sm uppercase font-sans rounded hover:bg-red-500 focus:outline-none focus:bg-red-500"
            @click="$emit('delete2', em2.id)"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: "Emotion",
  //
  props: ["emotionss", "emotionss2"],
  emits: ["delete", "change", "change2", "delete2"],
};
</script>

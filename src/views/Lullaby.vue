<template>
  <div class="Lullaby">
    <div class="text-black text-3xl justify-center stroke-current">
      <div class="px-72 py-12 ml-96">
        <p class="font-extrabold text-5xl">Lullaby</p>
      </div>
      <div class="px-16 ml-96">
        <p class="font-extrabold text-2xl">
          Write according to your feelings and emotions.
        </p>
      </div>
      <div class="px-32 ml-96">
        <p class="font-extrabold text-2xl">
          Choose to write green, yellow, red, write only one !
        </p>
      </div>
      <div class="pt-9 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail" rows="2" id="detail"></textarea>
        <!-- <input v-model="name" type="text" id="name" autocomplete="off" /> -->
        <button
          class="mt-4 px-4 py-2 bg-green-500 text-white text-sm uppercase font-medium rounded hover:bg-green-400 focus:outline-none focus:bg-green-400"
          @click.prevent="submitfriendship"
        >
          GOOD
        </button>
      </div>
        <div class="pt-6 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail" rows="2" id="detail"></textarea>
        <!-- <input v-model="name" type="text" id="name" autocomplete="off" /> -->
        <button
          class="mt-4 px-4 py-2 bg-yellow-600 text-white text-sm uppercase font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
          @click.prevent="submitfriendship"
        >
          GOOD
        </button>
      </div>
        <div class="pt-6 px-96 ml-24 mr-60 flex flex-col mb-3 text-xl">
        <textarea v-model="detail" rows="2" id="detail"></textarea>
        <!-- <input v-model="name" type="text" id="name" autocomplete="off" /> -->
        <button
          class="mt-4 px-4 py-2 bg-red-700 text-white text-sm uppercase font-medium rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          @click.prevent="submitfriendship"
        >
          GOOD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

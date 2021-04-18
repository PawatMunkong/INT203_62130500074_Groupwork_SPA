<template>

  <div class="text-black text-3xl justify-center stroke-current">
    <div class="px-72 py-12 ml-96">
      <p class="font-extrabold text-5xl">Lullaby list</p>
    </div>
  </div>
  <div class="flex-box">
    <div class="content" v-for="em in emotionss" :key="em.id">
      <div class="overflow-hidden shadow-md mb-10">
        <div
          class="card-body text-black text-3xl justify-center stroke-current"
        >
          {{ em.detail }}
        </div>
        <!-- Test -->
        <div class="card-footer">
          <button class="">Edit</button>
          <button class="">delete</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Emotion",
  props: ["emotionss"],
};

</script>

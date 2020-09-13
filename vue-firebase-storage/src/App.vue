<template>
  <v-app>
    <v-app-bar app color="orange" elevation="1" dark>
      <div class="d-flex align-center">
        <div class="text-h5">Firebase storage sample</div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

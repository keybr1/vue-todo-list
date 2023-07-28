<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container
        class="d-flex flex-column justify-center align-center"
      >
        <InputTodo />
        <MainList />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import InputTodo from "./components/InputTodo.vue"
import MainList from "./components/MainList.vue"
export default {
  name: 'App',

  components: {
    Navbar,
    InputTodo,
    MainList
  },

  data: () => ({
    //
  }),
};
</script>
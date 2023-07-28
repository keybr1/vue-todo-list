<template>
  <v-container>
    <v-list
      v-for="todo in allTodos"
      :key="todo.field_num"
      flat
    >
      <ItemTodo
        :todo="todo"
        :todos="allTodos"
      />
      <v-divider></v-divider>
    </v-list>
    <v-btn
      v-if="allTodos.length"
      @click="saveTodos"
      color="green accent-3"
      class="mx-2"
      >Save</v-btn>
    <div
      v-if="!allTodos.length"
      class="d-flex flex-column justify-center align-center text-h4 font-weight-thin"
    >
      <v-icon large>mdi-check-all</v-icon>
      NO TODOS
    </div>
  </v-container>
</template>

<script>
import ItemTodo from "./ItemTodo.vue";
import { mapGetters } from "vuex";
  export default {
    components: {
      ItemTodo
    },
    methods: {
      saveTodos() {
        console.log(this.allTodos);
      }
    },
    computed: {
      ...mapGetters(['allTodos'])
    }
  }
</script>
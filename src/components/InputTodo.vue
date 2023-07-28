<template>
  <v-container>
    <v-text-field
      @change="textTodoChange"
      v-model="textTodo"
      @keyup.enter="addTodoItem"
      outlined
      hide-details
      clearable
      label="Add Todo"
    >
    </v-text-field>
    <v-btn
      color="primary"
      elevation="4"
      depressed
      @click="addTodoItem"
      class="mt-2 ml-2"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

  export default {
    data() {
      return {
        textTodo: "",
        idTodo: 1,
      }
    },
    methods: {
      ...mapActions(["addTodo"]),
      textTodoChange(e) {
        this.textTodo = e;
      },
      addTodoItem() {
        if(this.textTodo !== "") {
          this.addTodo({
            field_num: this.idTodo++,
            field_value: this.textTodo,
            field_ready: false
          })
        }
        this.textTodo = "";
      }
    }

  }
</script>
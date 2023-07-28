<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item
      @click="readyTodo(todo.field_num)"
      :class="{ 'green lighten-5': todo.field_ready }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            v-model="todo.field_ready"
            :color="todo.field_ready && 'green' || 'primary'"
            ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            v-if="!editing"
            :class="{ 'text-decoration-line-through': todo.field_ready }"
          >{{ todo.field_value}}</v-list-item-title>
          <v-text-field
            v-model="textTodo"
            @change="changeTextTodo"
            v-else></v-text-field>
          </v-list-item-content>
          <div>
            <v-btn
              color="grey lighten-2"
              depressed
              @click="updateTodoItem(todo)"
              >{{ editing ? "Update" : "Edit"}}
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn
              class="ml-2"
              color="error"
              depressed
              @click="delTodo(todo.field_num)"
            >Delete
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          </div>
      </template>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

  export default {
    props: {
      todo: {},
      todos: []
    },
    data() {
      return {
        textTodo: "",
        editing: false
      }
    },
    methods: {
      ...mapActions(["delTodo", "updateTodo"]),
      changeTextTodo(e) {
        this.textTodo = e
      },
      readyTodo(id) {
        let todo = this.todos.filter(t => t.id === id)
        todo.field_ready = !todo.field_ready
      },
      updateTodoItem(todo) {
        this.editing = this.editing === true ? false : true;
        if (this.editing) {
          this.textTodo = todo.field_value;
          this.updateTodo(todo)
        } else {
          todo.field_value = this.textTodo;
        }
      }
    }
  }
</script>
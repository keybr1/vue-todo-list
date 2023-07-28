import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        field_num: 22,
        field_value: "Create app",
        field_ready: false
      }
    ]
  },
  getters: {
    allTodos:(state) => state.todos
  },
  actions: {
    addTodo({commit}, todo) {
      commit('add_todo', todo);
    },
    delTodo({commit}, id) {
      commit('del_todo', id);
    },
    updateTodo({commit}, todo) {
      commit('update_todo', todo);
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo)
    },
    del_todo(state, id) {
      state.todos = state.todos.filter(todo => todo.field_num !== id);
    },
    update_todo(state, todo) {
      let idx = state.todos.findIndex(i => i.field_num === todo.field_num);
      if(idx !== -1) {
        state.todos[idx] = todo;
      }
    }
  },
})

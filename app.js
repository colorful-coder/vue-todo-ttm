Vue.component("todo-list", {
  template: "#todo-template",
  data() {
    return {
      newTodo: "",
      todos: [],
      updateTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") {
        return;
      }
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    isEdit() {
      this.completed = true ? false : true;
    },
  },
  mounted() {
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
});
new Vue({
  el: "#app",
});

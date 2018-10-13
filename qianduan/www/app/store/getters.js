export default {
  todos(state) {
    return state.todos;
  },
  done(state) {
    return state.todos.filter(item => item.done);
  },
  undone(state) {
    return state.todos.filter(item => !item.done);
  },
  SHOWTYPE(state) {
    return state.showType;
  }
}
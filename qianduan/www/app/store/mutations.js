export default {
  init(state, todos) {
    state.todos = todos;
  },
  showType(state, {showType}) {
    state.showType = showType;
  }
}
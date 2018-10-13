export default {
  // 初始化todos
  async init({commit}) {
    const {todos} = await fetch('/api/todos').then(data => data.json());
    commit('init', todos);
  },
  // 改变todo
  async changeTodo({commit}, {id, k, v}) {
    const {todos} = await fetch('/api/todos/'+id, {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({id, k, v})
    }).then(data => data.json());

    commit('init', todos);
  },
  // 增加todo
  async addTodo({commit}, {title}) {
    const {todos} = await fetch('/api/todos', {
      'method': 'post',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({title})
    }).then(data => data.json());
    commit('init', todos);
  },
  // 删除todo
  async delTodo({commit}, {id}) {
    const {todos} = await fetch('/api/todos/'+id, {
      'method': 'delete',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({id})
    }).then(data => data.json());
    commit('init', todos);
  }

}
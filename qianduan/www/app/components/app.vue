<template>
  <div>
    <Todo></Todo>
  </div>
</template>

<script>
  import Todo from './todo/Todo.vue';

  export default {
    components: {
      Todo
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
</style>

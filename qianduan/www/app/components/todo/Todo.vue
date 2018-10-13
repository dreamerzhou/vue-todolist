<template>
  <div class="todo">
    <HdTodo></HdTodo>
    <BdTodo></BdTodo>
    <FtTodo></FtTodo>
  </div>
</template>

<script>
  import HdTodo from './HdTodo.vue';
  import BdTodo from './BdTodo.vue';
  import FtTodo from './FtTodo.vue';

  export default {
    created() {
      this.$store.dispatch('init');
    },
    components: {
      HdTodo,
      BdTodo,
      FtTodo
    }
  }
</script>

<style scoped>
  .todo {
    width: 200px;
    margin: 10px auto;
  }
</style>

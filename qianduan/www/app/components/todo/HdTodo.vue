<template>
  <div>
    <input type="text" v-model="title">
    <button @click="addTodo">添加</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo() {
        this.$store.dispatch('addTodo', {title: this.title});
        this.title = '';
      }
    }
  }
</script>

<style scoped>
  input {
    padding: 2px;
  }
</style>

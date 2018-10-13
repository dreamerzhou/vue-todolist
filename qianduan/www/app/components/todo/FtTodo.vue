<template>
  <div class="fttodo">
    <button :class="{cur: SHOWTYPE === 'SHOWALL'}" @click="showType('SHOWALL')">全部({{todos.length}})</button>
    <button :class="{cur: SHOWTYPE === 'SHOWDONE'}" @click="showType('SHOWDONE')">已完成({{done.length}})</button>
    <button :class="{cur: SHOWTYPE === 'SHOWUNDONE'}" @click="showType('SHOWUNDONE')">未完成({{undone.length}})</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'todos',
        'done',
        'undone',
        'SHOWTYPE'
      ])
    },
    methods: {
      showType(showType) {
        this.$store.commit('showType', {showType})
      }
    }
  }
</script>

<style scoped>
  .fttodo {
    width: 200px;
    display: flex;
    justify-content: space-between;
    background-color: #F2F2F2;
  }
  .cur {
    background-color: #FF0;
  }
</style>

<template>
  <div>
    <div v-for="(item, index) in listArr" :key="index">
      <ul class="bdtodo-ul" v-if="SHOWTYPE === item.state">
        <li v-for="(item, index) in item.data" :key="index">
          <label class="fl" v-if="!isEdit[index]">
            <input type="checkbox" :checked="item.done" @click="changeDone(item, $event)">{{item.title}}
          </label>
          <label class="fl" v-if="isEdit[index]">
            <input class="edit-ipt" type="text" :value="item.title" @keyup.13="changeTitle(item, index, $event)" autofocus>
          </label>      
          <span class="fr">
            <button @click="editTodo(item, index)">编辑</button>
            <button @click="delTodo(item)">删除</button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        isEdit: [],
        list: [
          { state: 'SHOWALL', data: this.todos }, // 函数实现 this指向
          { state: 'SHOWDONE', data:  this.done },
          { state: 'SHOWUNDONE', data: this.undone }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'todos',
        'done',
        'undone',
        'SHOWTYPE'
      ]),
      listArr() {
        this.list = [
          { state: 'SHOWALL', data: this.todos }, // 函数实现 this指向
          { state: 'SHOWDONE', data:  this.done },
          { state: 'SHOWUNDONE', data: this.undone }
        ]
        return this.list;
      }
    },
    methods: {
      changeDone(item, e) {
        this.$store.dispatch('changeTodo', {id: item.id, k: 'done', v: e.target.checked});
      },
      delTodo(item) {
        this.$store.dispatch('delTodo', {id: item.id});
      },
      editTodo(item, index) {        
        this.isEdit[index] = true;
        Vue.set(this.isEdit, index, this.isEdit[index]);
      },
      changeTitle(item, index, e) {
        this.isEdit[index] = false;
        this.$store.dispatch('changeTodo', {id: item.id, k: 'title', v: e.target.value});
      }
    }
}
</script>

<style scoped>
  .bdtodo-ul>li {
    width: 200px;
    height: 30px;
    line-height: 30px;
  }
  .edit-ipt {
    width: 120px;
  }
</style>

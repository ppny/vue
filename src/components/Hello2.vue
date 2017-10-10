<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'hello2',
  data () {
    return {
      msg: 'second second second second second ',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

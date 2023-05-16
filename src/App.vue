<script setup>
import todoHead from '../src/views/header.vue'
import todoFoot from '../src/views/footer.vue'
import todoHome from '../src/views/home.vue'


</script>

<template>
  <header>
    <todo-head></todo-head>
  </header>
  <main>
    <todo-home>
      <template v-slot:text>
        Try your best
      </template>
    </todo-home>
  </main>
  <footer>
    <todo-foot></todo-foot>
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  text-align: center;
  color: antiquewhite;
  background-color: darkturquoise;
}

main {
  display: flex;
  min-height: 100vh;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  color: aliceblue;
  background: purple;
}
</style>

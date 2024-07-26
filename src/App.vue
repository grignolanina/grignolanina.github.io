<template>
  <PasswordGame />
</template>

<script>
import PasswordGame from './components/PasswordGame.vue';


export default {
  name: 'App',
  components: {
    PasswordGame
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border: 2px solid white;
  background: rgb(244, 248, 215);
}
</style>

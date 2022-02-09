<template>
<div id="app" class="h-screen">
  <navigation></navigation>
  <posting></posting>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Posting from './components/Posting.vue';

export default {
  name: 'App',
  components: {
    Posting,
    Navigation,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

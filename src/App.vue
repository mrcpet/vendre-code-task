<template>
  <Header />
  <router-view />
  <nav>
    <router-link to="/">1</router-link> |
    <router-link to="/2">2</router-link>
  </nav>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style>
@import '~@fortawesome/fontawesome-free/css/all.css';

* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

nav {
  padding: 2rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <nav>
    <router-link to="/"></router-link> 
  </nav>
  <router-view/>
 </template>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}


*{
  background-color: rgb(74, 78, 99);
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>

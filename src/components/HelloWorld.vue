<template>
  <div class="hello">
    <nav class="nav">
      <font-awesome-icon size="5x" id="navIcon" title="java" :icon="['fab', 'java']"></font-awesome-icon>
      <font-awesome-icon size="5x" id="navIcon" title="linux" :icon="['fab', 'linux']"></font-awesome-icon>
      <font-awesome-icon size="5x" id="navIcon" title="node" :icon="['fab', 'node-js']"></font-awesome-icon>
      <font-awesome-icon size="5x" id="navIcon" title="js" :icon="['fab', 'js']"></font-awesome-icon>
    </nav>
    <h1>{{ msg }}</h1>
      <div class="daisy">
        <img alt="Daisy Cat" src="../assets/daisySleeping.jpg">
        <div class="text">
          <h3>About Me</h3>
          <p>
            I'm a full-time software engineer. 
            <br><br> I'm working on progressing my web development skills to build fast webpages.
            <br><br> I'm passionate about building useful and efficient software and would love to get to build/architech software for a huge userbase.
            <br><br> I have a bachelors of science degree in Computer Science. I've worked in sales, IT, supply chain management, and now development.
            <br><br> I have a cat named Daisy and she likes to supervize me while I code.
          </p>
        </div>
      </div>
      <div class="connect">
      <br><br> Connect with me on <a href="https://linkedin.com/in/chris-hayes-79308864/" target="_blank">
                                    <font-awesome-icon size="2x" id="iconLinkedIn" title="LinkedIn" :icon="['fab', 'linkedin']" />
                                  </a>
      <br><br> Follow me on <a href="https://github.com/chrishayes042" target="_blank"> 
                              <font-awesome-icon size="2x" id="icon" title="Github" :icon="['fab', 'github']" />
                            </a>
        
      </div>


    <h3>About this page</h3>
    <p>
      This page is built with VueJS. <font-awesome-icon title="Vue" :icon="['fab', 'vuejs']" />

    </p>
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>
<style>
h1 {
  color: aqua;
}
h3 {
    color: aqua;
  }
  #navIcon{
    padding: 10px;
    display: inline-flexbox;
    color:darkcyan;
  }
  #iconLinkedIn{
    color: rgb(8, 8, 197);
  }
  #icon{
    color: whitesmoke;
  }
  p{
    padding-left: 10px;
    margin: 10px;
    display: inline-flexbox;
    color: antiquewhite;  
  
  }
  img{
    height: 400px;
    width: 450px;
  }
  a {
    color: #b942af;
  }
  .daisy{
    display: flex;
    padding-left: 20px;
    margin-left:auto;
    margin-right: auto;
  }
  .connect{
    padding-top: 35px;
    width: 100%;
    text-align: center;
    margin-top: auto;
    margin-left:auto;
    margin-right:auto;
    color: white;
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->


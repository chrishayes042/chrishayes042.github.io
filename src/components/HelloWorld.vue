<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <h1><font-awsome-icons icon="HatWizard" /></h1> 
 
   
   <font-awesome-icon icon="fab" />
    
    
    <h3>About Me</h3>
    <p>
      I'm a software engineer. Currently working for <a href="https://bc.com" target="_blank"> Boise Cascade.</a> 
      <br><br>At Boise Cascade we utilize Java swing with SpringBoot to build features and maintain an in-house monolith desktop application.
      <br><br> I'm working on progressing my web development skills to build fast webpages.
      <br><br> I'm passionate about building useful and efficient software and would love to get to build/architech software for a huge userbase.
      <br><br> I have a bachelors of science degree in Computer Science. I've worked in sales, IT, supply chain management, and now development.
      <br><br> I have a cat named Daisy and she likes to supervize me while I code.
      <br><br> Connect with me on <a href="https://linkedin.com/in/chris-hayes-79308864/" target="_blank">
                                    <font-awesome-icon size="2x" id="icon" title="LinkedIn" :icon="['fab', 'linkedin']" />
                                  </a>
      <br><br> Follow me on <a href="https://github.com/chrishayes042" target="_blank"> 
                             <font-awesome-icon size="2x" id="icon" title="Github" :icon="['fab', 'github']" />
                            </a>


    </p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
  color: aqua;
}
#icon{
  color: black;
}
p{
  padding: 0;
  display: inline-flexbox;
  color: antiquewhite;
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
  color: #b942af;
}
</style>

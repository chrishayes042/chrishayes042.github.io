const App = () => {
  const div = document.createElement("div");
  div.classList.add("container");

  div.innerHTML = `
                    <nav id="navDiv">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                     </ul>
                    </nav>
                    <hr>
                    <div id="pContainer">
                        <p>Hello! I'm Chris and I'm a software engineer. I'm currently working full time as a developer. I have a bachelors degree in software development from WGU.</p>
                    </div>
                    <div id="imageDaisy">
                        <image id="daisy" src="assets/daisy.png"></image>
                    </div>
                    <div id="aboutMe">
                    <h1>About Me</h1>
                     <p>I'm  I love my cat Daisy</p> 
                     <a href="assets/ChrisHayesResume2023.pdf">Resume</a>
                    </div>
                    <div id="contactDiv">
                      <h1>Contact Me!</h1>
                      <a href="https://github.com/chrishayes042">GitHub</a>
                    </div>
                    `;
  return div;
};

function render(component, parent) {
  parent.innerHTML = "";
  parent.appendChild(component);
}

render(App(), document.querySelector("#root"));

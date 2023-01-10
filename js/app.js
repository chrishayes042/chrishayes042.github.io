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
                        <p></p>
                    </div>
                    <div id="imageDaisy">
                        <image id="daisy" src="assets/daisy.png"></image>
                    </div>
                    `;
  return div;
};

function render(component, parent) {
  parent.innerHTML = "";
  parent.appendChild(component);
}

render(App(), document.querySelector("#root"));

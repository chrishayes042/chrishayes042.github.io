import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faCat, faAmbulance } from "@fortawesome/free-solid-svg-icons";

let iconTag = document.getElementById("icon");
// iconTag.innerHTML = "I'm baffled";

library.add(faCat, faAmbulance);

const iconContainer = document.createElement("span");
iconContainer.innerHTML = icon({ prefix: "fas", iconName: "cat" }).html;

iconTag.appendChild(iconContainer);

import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faCat, faAmbulance } from "@fortawesome/free-solid-svg-icons";

library.add(faCat, faAmbulance);

const iconTag = document.getElementById("icon");

const iconContainer = document.createElement("span");
iconContainer.innerHTML = icon({ prefix: "fas", iconName: "cat" }).html;

iconTag.innerHTML = <i class="fas fa-cat"></i>;

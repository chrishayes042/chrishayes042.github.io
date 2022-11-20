import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { 
    faGithub, 
    faJava, 
    faLinkedin, 
    faVuejs, 
    faLinux, 
    faNodeJs, 
    faJs
} from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faGithub, 
    faJava, 
    faLinkedin, 
    faVuejs, 
    faLinux,
    faNodeJs,
    faJs
    );
dom.watch();

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')

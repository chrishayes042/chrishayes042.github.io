import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faGithub, fab, faLinkedin, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faGifts, faSpinner } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGifts);
library.add(faGithub, faLinkedin, faVuejs);
dom.watch();

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')

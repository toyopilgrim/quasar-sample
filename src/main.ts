import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from "@/routes/router";

const app = createApp(App)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})
app.use(router);

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
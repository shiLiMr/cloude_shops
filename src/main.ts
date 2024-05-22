import './global/index'

import { createApp } from 'vue'
import pinia from './stores/index'

import './promission'

import "./styles/index.scss"

import App from './App.vue'
import router from './router'
import Ele from './global/index' //elementplus


const app = createApp(App)
app.use(Ele)
app.use(router)
app.use(pinia)

app.mount('#app')

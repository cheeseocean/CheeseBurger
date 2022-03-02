import {createApp} from 'vue'
import '@/assets/js/amfe-flexible-2.2.1'
import {Form, CellGroup, Field, Button, Tabbar, TabbarItem, Icon} from "vant"
import '@/assets/css/base.scss'
import '@/assets/css/public.scss'
import '@/assets/css/vant.scss'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
;[Form, CellGroup, Field, Button, Tabbar, TabbarItem, Icon].forEach(component => app.use(component))

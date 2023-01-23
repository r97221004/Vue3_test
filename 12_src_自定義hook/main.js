//引入的不再是 Vue 構造函數了，引入的是一個名為 createApp 的工廠函數
import { createApp } from 'vue'
import App from './App.vue'

//創建應用實例對象——app(類似於之前Vue2中的vm，但 app 比 vm 更“輕”)
const app = createApp(App)

//掛載
app.mount('#app')
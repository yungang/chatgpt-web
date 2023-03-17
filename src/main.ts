import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupAssets()
  setupStore(app)
  const qstr = location.href.substr(1).split('?')[1]
  var user = ''
  if (qstr != undefined) {
    user = qstr.split('=')[1]
  }
  localStorage.setItem('chatgpt_user', user)

  setupI18n(app)
  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

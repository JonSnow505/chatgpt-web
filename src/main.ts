import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
  const app = createApp(App)
  setupAssets()

  setupScrollbarStyle()

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

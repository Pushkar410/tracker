import { defineConfig } from 'vite'

export default defineConfig({
  // Use index.html as the entry point
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
})

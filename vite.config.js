import { defineConfig } from 'vite'

export default defineConfig({
  // Use lc8w.html as the entry point
  build: {
    rollupOptions: {
      input: './lc8w.html'
    }
  }
})

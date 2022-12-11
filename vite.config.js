// vite.config.(js|ts)
import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

export default defineConfig({
  base: './',
  plugins: [
    pugPlugin({})
  ],
  resolve: {
    extensions: ['.html', '.pug', '.css', '.sass', '.js']
  }
});

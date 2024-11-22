import { defineConfig } from 'vite';


export default defineConfig({
    build: {
      outDir: 'build', // 指定输出目录
    },
    server: {
      host: '0.0.0.0', // 允许从局域网访问
      port: 3001, // 可选，指定端口号，默认3000
    },
  });
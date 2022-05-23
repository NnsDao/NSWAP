import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  console.log('command,mode', command, mode);
  return {
    publicDir: 'src/public',
    envDir: 'env',
    envPrefix: ['VITE_', 'DEV_', 'xxx_'],
    plugins: ((plugin) => {
      if (mode === 'production') {
        plugin.push(
          // @ts-ignore
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true
          })
        );
      }
      return plugin;
    })([react()]),
    build: {
      outDir: 'dist',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
        }
      }
    },

    server: {
      fs: {
        strict: false
      },
      proxy: {
        '/api/v2': {
          target: 'https://ic0.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^api\//, '/api/v2/canister')
        }
      }
    },
    define: {
      // dfx rely on this
      'process.env': {}
    }
  };
});

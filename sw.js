self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para que o navegador considere um PWA instalável
});

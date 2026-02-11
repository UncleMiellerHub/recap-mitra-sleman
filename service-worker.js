const CACHE_NAME = 'disdukcapil-v2';

const BASE_PATH = '/recap-mitra-sleman/';

const ASSETS = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'css/style.css',
  BASE_PATH + 'js/app.js',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'data/Kelahiran.html',
  BASE_PATH + 'data/Kematian.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});


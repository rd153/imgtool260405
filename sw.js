const CACHE_NAME = 'img-v1';
// 简单的缓存策略：离线也能打开页面
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(['index.html', 'manifest.json']))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

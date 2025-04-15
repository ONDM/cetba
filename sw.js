const cacheName = 'knihy-cache';

self.addEventListener('install', (event) =>
{
  console.log('Service Worker Installed');
  event.waitUntil(
  caches.open(cacheName).then((cache) =>
  {
    return cache.addAll([
      '/cetba/',
      '/cetba/manifest.json',
      '/cetba/style.css',
      '/cetba/script.js',
      '/cetba/favicon.png',
      '/cetba/font.woff2',
      '/cetba/sw.js',
      '/cetba/logo.png',
      '/cetba/folder/1.pdf', '/cetba/folder/2.pdf', '/cetba/folder/3.pdf', '/cetba/folder/4.pdf', '/cetba/folder/5.pdf',
      '/cetba/folder/6.pdf', '/cetba/folder/7.pdf', '/cetba/folder/8.pdf', '/cetba/folder/9.pdf', '/cetba/folder/10.pdf',
      '/cetba/folder/11.pdf', '/cetba/folder/12.pdf', '/cetba/folder/13.pdf', '/cetba/folder/14.pdf', '/cetba/folder/15.pdf',
      '/cetba/folder/16.pdf', '/cetba/folder/17.pdf', '/cetba/folder/18.pdf', '/cetba/folder/19.pdf', '/cetba/folder/20.pdf',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) =>
{
  event.respondWith(
  caches.match(event.request).then((response) =>
  {
    return response || fetch(event.request);
  })
  );
});

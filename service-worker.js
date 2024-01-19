const cacheName = 'knihy-cache-v2';

self.addEventListener('install', (event) =>
{
  console.log('Service Worker Installed');
  event.waitUntil(
  caches.open(cacheName).then((cache) =>
  {
    return cache.addAll([
      '/',
      '/cetba/manifest.json',
      '/cetba/style.css',
      '/cetba/script.js',
      '/cetba/favicon.png',
      '/cetba/font.woff2',
      '/cetba/sw.js',
      '/cetba/folder/1/1A.jpg', '/cetba/folder/1/1B.jpg',
      '/cetba/folder/2/2A.jpg', '/cetba/folder/2/2B.jpg',
      '/cetba/folder/3/3A.jpg', '/cetba/folder/3/3B.jpg',
      '/cetba/folder/4/4A.jpg', '/cetba/folder/4/4B.jpg',
      '/cetba/folder/5/5A.jpg', '/cetba/folder/5/5B.jpg',
      '/cetba/folder/6/6A.jpg', '/cetba/folder/6/6B.jpg',
      '/cetba/folder/7/7A.jpg', '/cetba/folder/7/7B.jpg',
      '/cetba/folder/8/8A.jpg', '/cetba/folder/8/8B.jpg',
      '/cetba/folder/9/9A.jpg', '/cetba/folder/9/9B.jpg',
      '/cetba/folder/10/10A.jpg', '/cetba/folder/10/10B.jpg',
      '/cetba/folder/11/11A.jpg', '/cetba/folder/11/11B.jpg',
      '/cetba/folder/12/12A.jpg', '/cetba/folder/12/12B.jpg',
      '/cetba/folder/13/13A.jpg', '/cetba/folder/13/13B.jpg',
      '/cetba/folder/14/14A.jpg', '/cetba/folder/14/14B.jpg',
      '/cetba/folder/15/15A.jpg', '/cetba/folder/15/15B.jpg',
    /*'/cetba/folder/16/16A.jpg', '/cetba/folder/16/16B.jpg',
      '/cetba/folder/17/17A.jpg', '/cetba/folder/17/17B.jpg',
      '/cetba/folder/18/18A.jpg', '/cetba/folder/18/18B.jpg',
      '/cetba/folder/19/19A.jpg', '/cetba/folder/19/19B.jpg',
      '/cetba/folder/20/20A.jpg', '/cetba/folder/20/20B.jpg',*/
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

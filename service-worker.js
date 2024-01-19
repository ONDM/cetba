const cacheName = 'knihy-cache-v2';

self.addEventListener('install', (event) =>
{
  console.log('Service Worker Installed');
  event.waitUntil(
  caches.open(cacheName).then((cache) =>
  {
    return cache.addAll([
      '/',
      '/manifest.json',
      'style.css',
      'script.js',
      'favicon.png',
      'font.woff2',
      'sw.js',
      'folder/1/1A.jpg', 'folder/1/1B.jpg',
      'folder/2/2A.jpg', 'folder/2/2B.jpg',
      'folder/3/3A.jpg', 'folder/3/3B.jpg',
      'folder/4/4A.jpg', 'folder/4/4B.jpg',
      'folder/5/5A.jpg', 'folder/5/5B.jpg',
      'folder/6/6A.jpg', 'folder/6/6B.jpg',
      'folder/7/7A.jpg', 'folder/7/7B.jpg',
      'folder/8/8A.jpg', 'folder/8/8B.jpg',
      'folder/9/9A.jpg', 'folder/9/9B.jpg',
      'folder/10/10A.jpg', 'folder/10/10B.jpg',
      'folder/11/11A.jpg', 'folder/11/11B.jpg',
      'folder/12/12A.jpg', 'folder/12/12B.jpg',
      'folder/13/13A.jpg', 'folder/13/13B.jpg',
      'folder/14/14A.jpg', 'folder/14/14B.jpg',
      'folder/15/15A.jpg', 'folder/15/15B.jpg',
    /*'folder/16/16A.jpg', 'folder/16/16B.jpg',
      'folder/17/17A.jpg', 'folder/17/17B.jpg',
      'folder/18/18A.jpg', 'folder/18/18B.jpg',
      'folder/19/19A.jpg', 'folder/19/19B.jpg',
      'folder/20/20A.jpg', 'folder/20/20B.jpg',*/
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

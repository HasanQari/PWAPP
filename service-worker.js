importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
self.addEventListener("fetch", function (event) {});
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
)

//CACHING FILES//
// const filesToCache = [
//     './',
//     './offline.html',
//     './asset/css/BScss/offline.css',
//   ];
  
//   const staticCacheName = 'pages-cache-v2';
  
//   self.addEventListener('install', event => {
//     console.log('Attempting to install service worker and cache static assets');
//     event.waitUntil(
//       caches.open(staticCacheName)
//       .then(cache => {
//         return cache.addAll(filesToCache);
//       })
//     );
//   });

//   self.addEventListener('fetch', (event) => {
//     event.respondWith(async function () {
//       try {
//         return await fetch(event.request);
//       } catch (err) {
//         return caches.match(event.request);
//       }
//     }());
//   });
  
//   // TODO 6 - Respond with custom offline page
  
//   self.addEventListener('activate', event => {
//     console.log('Activating new service worker...');
  
//     const cacheWhitelist = [staticCacheName];
  
//     event.waitUntil(
//       caches.keys().then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             if (cacheWhitelist.indexOf(cacheName) === -1) {
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//     );
//   });
  
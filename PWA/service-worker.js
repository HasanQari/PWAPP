// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
// self.addEventListener("fetch", function (event) {});
// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.NetworkFirst()
// )

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([".../","../asset/css/app.css","../icons/manifest-icon-192.png"])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
    console.log(`intercepting fetch request for: ${e.request.url}`);
})

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


// var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
// var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
// var CACHE_NAME = APP_PREFIX + VERSION
// var URLS = [                            // Add URL you want to cache in this list.
//   'PWA/',                     // If you have separate JS/CSS files,
//   '../index.html'            // add path to those files here
// ]

// // Respond with cached resources
// self.addEventListener('fetch', function (e) {
//   console.log('fetch request : ' + e.request.url)
//   e.respondWith(
//     caches.match(e.request).then(function (request) {
//       if (request) { // if cache is available, respond with cache
//         console.log('responding with cache : ' + e.request.url)
//         return request
//       } else {       // if there are no cache, try fetching request
//         console.log('file is not cached, fetching : ' + e.request.url)
//         return fetch(e.request)
//       }

//       // You can omit if/else for console.log & put one line below like this too.
//       // return request || fetch(e.request)
//     })
//   )
// })

// // Cache resources
// self.addEventListener('install', function (e) {
//   e.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       console.log('installing cache : ' + CACHE_NAME)
//       return cache.addAll(URLS)
//     })
//   )
// })

// // Delete outdated caches
// self.addEventListener('activate', function (e) {
//   e.waitUntil(
//     caches.keys().then(function (keyList) {
//       // `keyList` contains all cache names under your username.github.io
//       // filter out ones that has this app prefix to create white list
//       var cacheWhitelist = keyList.filter(function (key) {
//         return key.indexOf(APP_PREFIX)
//       })
//       // add current cache name to white list
//       cacheWhitelist.push(CACHE_NAME)

//       return Promise.all(keyList.map(function (key, i) {
//         if (cacheWhitelist.indexOf(key) === -1) {
//           console.log('deleting cache : ' + keyList[i] )
//           return caches.delete(keyList[i])
//         }
//       }))
//     })
//   )
// })
  
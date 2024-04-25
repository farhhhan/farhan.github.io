'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ced54a27b99831ba4cf76ac9e8836b9",
"assets/AssetManifest.bin.json": "472039e37b0ced3ec272444ecd1a4bc9",
"assets/AssetManifest.json": "da9e3963c132cc0f77332e7c6e23950c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/images/brotojpg.jpg": "5ffc18f20d37809752f298e21c45f0ed",
"assets/assets/images/bt.png": "48d9bb2ffd08420fcea242b76f7841e8",
"assets/assets/images/css3.png": "c9421be52fe48fdf04839b53f8e9f1d4",
"assets/assets/images/cv.pdf": "a708533eb32d760e95bae3882f03e17c",
"assets/assets/images/Dart.png": "0026612a51dcda82839c135a331f8ee6",
"assets/assets/images/dileepabandara_dev.png": "ba5334a4bc29e0aa0fb161f1e72c9e4f",
"assets/assets/images/firebase.png": "7371a3d035412a78dabc88d0e5237b44",
"assets/assets/images/flutter.png": "b245244915e295b754c173e2fe159f8f",
"assets/assets/images/flutter_fly.webp": "7c045e367ec187bd2aaf46fcc833dc8f",
"assets/assets/images/getX.png": "6d476fe7577df416ccb3873e1362af41",
"assets/assets/images/git.png": "5eb26339f32f9e756edb4252afbd1f33",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/html5.png": "5ab3e3845cf9f0609f21767e9b693037",
"assets/assets/images/js.png": "94ae2dcd4fa410811cab4e1fbb403340",
"assets/assets/images/logo.gif": "e5b8fcb1647ebf22b4ccbd52049d6044",
"assets/assets/images/logo1.png": "f7800027ca1fb97727d9b119e86e836b",
"assets/assets/images/logo_2.png": "9141b650e6030a8022031300bdd5e2e2",
"assets/assets/images/map.png": "e92cb7a10c3bf3ae4b5c716e9f2b2263",
"assets/assets/images/my.png": "144883814a9883abed8cfc7187542a19",
"assets/assets/images/my2.png": "22ab0492e68accb56739f044a28ca4b0",
"assets/assets/images/netflix.png": "38b9961a844cd4ad30ff39ec258efdd6",
"assets/assets/images/new.png": "6675451a8154be9d23629c06298e79df",
"assets/assets/images/pj1.png": "07cf16cf4a9cc0af74ac5a8e1f3fc960",
"assets/assets/images/pj2.png": "dbe0e92985e931a258560211b2b3f3b4",
"assets/assets/images/postman.png": "b391087a005c952e3a06f0c4ac705ab6",
"assets/assets/images/rest.png": "e832fd81d9f48450e232b2b6170ec4d6",
"assets/assets/images/rivarpod.png": "14e65888050f2be1dbab741db6ea6a96",
"assets/assets/images/sql.png": "ace8be3ae7d64c55ddbdf5928b5cf260",
"assets/assets/images/wet.png": "bda00b701c606967af47289d12a441f9",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3df2892101e0fdffbf24b939c8a2b927",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "82097ca8e13aa2755f672be7f851414a",
"/": "82097ca8e13aa2755f672be7f851414a",
"main.dart.js": "90f3eaaa02b2774014573bb8f17dd669",
"manifest.json": "0d41addfc3f48821e8e067eea75872dd",
"splash/img/splash%20copy%202.gif": "7647bb7539382dd708010625c4598021",
"splash/img/splash%20copy.gif": "7647bb7539382dd708010625c4598021",
"splash/img/splash.gif": "7647bb7539382dd708010625c4598021",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "bda7a2f80c3657882ba7949009440b66"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bundle.css",
    "revision": "0b0ba6adf7d39815bd7fcdb9b036a7e6"
  },
  {
    "url": "bundle.js",
    "revision": "bf3fd79a785154f95c919bd737a22bfa"
  },
  {
    "url": "favicon.png",
    "revision": "89b2481904eafc8ec8e90230841a0e34"
  },
  {
    "url": "html2canvas.min.js",
    "revision": "07dfafa027eb2f5e81f234eeaa30ec16"
  },
  {
    "url": "icon.png",
    "revision": "c0e7522596d105b700d1d6d0cbbcd47c"
  },
  {
    "url": "index.html",
    "revision": "0d1be15d263f1f766c33801e09be6833"
  },
  {
    "url": "manifest.json",
    "revision": "5b4610e5c65de0223c692eec315cd676"
  },
  {
    "url": "pms.json",
    "revision": "9e31b183d017a2113209ff7666abcc73"
  },
  {
    "url": "pokemon_icon_000.png",
    "revision": "b8fd366bba04e4f3157a3f1c5d579bc2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*PogoAssets.*\.(?:png)$/, new workbox.strategies.CacheFirst({ "cacheName":"pm-shiny-cache--cdn-image", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, purgeOnQuotaError: false })] }), 'GET');

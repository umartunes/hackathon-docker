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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "e0ad8b64d745f5a9b926bd8e56877e41"
  },
  {
    "url": "pre-loader.css",
    "revision": "ccafbf5e345f4b34a2c7259e8e67131d"
  },
  {
    "url": "static/css/main.395366b1.css",
    "revision": "0c49b675a966cdb0e387ac29e45dd8c8"
  },
  {
    "url": "static/js/main.4a5523cc.js",
    "revision": "9955208c88b6fe4e947796c28b5858f1"
  },
  {
    "url": "static/media/bg-mountain.b0a14945.jpg",
    "revision": "b0a14945ee1376a83413e53604b89724"
  },
  {
    "url": "static/media/todo.4bbb2c2a.png",
    "revision": "4bbb2c2af14249079ab4d850a0d61172"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":500,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/graph.facebook.com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "avatars", plugins: [] }), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "api-cache", plugins: [] }), 'GET');

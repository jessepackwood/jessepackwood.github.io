"use strict";var precacheConfig=[["/index.html","cda74aaaf728d633f6196681edd9a832"],["/static/css/main.59698d79.css","c82ee97b46d5f9a9ad0f12e72aab0e41"],["/static/js/main.ea682a95.js","314ffe497a9c81bfe35e6a32e5adf6fe"],["/static/media/Jesse-Packwood-Resume.2eee3d5e.pdf","2eee3d5ed657eacab55b842f7e514078"],["/static/media/boat_fog.a3bbe0e3.jpg","a3bbe0e3bfa8cdca498700b6d9d75ead"],["/static/media/cheesman_black.a64322f6.jpg","a64322f6843ac3722544c88fde8f3842"],["/static/media/colombia_fly.e610f6ba.jpg","e610f6ba93b7a330b918604caa149fb4"],["/static/media/down-arrows.9d57c40e.svg","9d57c40ee4a00ea398e1944f5b833254"],["/static/media/hero_before_canoe.2b642850.jpg","2b6428502d2e3810e13d1ead846e0e4c"],["/static/media/ipad-coin-watch.cd4e882b.png","cd4e882b5eea36e329bbfd32357305e6"],["/static/media/iphone-coin-watch.1a0a05d7.png","1a0a05d749204e7611a83bded832ff64"],["/static/media/landon_reeling.5b1c0ec4.jpg","5b1c0ec4c04f33abfc282891d3094b76"],["/static/media/macbook-coin-watch.06477197.png","064771972d2e2edf8e40a60a42521329"],["/static/media/matador_surf.d948dae0.jpg","d948dae0aee1121614250500dc8eccdf"],["/static/media/menu.a159269a.svg","a159269a67740e572f7f34c363bddbb5"],["/static/media/ted_white.598478f2.jpg","598478f21d6bc2275dbbfc7bd8274df6"],["/static/media/umpqua_blue.f7ce80ef.jpg","f7ce80ef720c13fffcb0cdaffa14935a"],["/static/media/villian_after.fd0b0002.jpg","fd0b0002500619e83d7e6cfb4930d941"],["/static/media/villian_before.74c7a1a9.jpg","74c7a1a91956951e5e070433f3f50885"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
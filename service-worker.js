"use strict";var precacheConfig=[["/index.html","359dcb65a9ce4f87d9afa001082e3774"],["/static/css/main.c9d0818d.css","96e48bec4d660bed4c1644834b102741"],["/static/js/main.52b6f2fb.js","a2ebb47c9a21135cf85064b607246454"],["/static/media/Jesse_Packwood_Resume.b1dfb3b0.pdf","b1dfb3b0f42914a8fc00d31a31a6b8f2"],["/static/media/bali_surf_thumbnail.c0d838b1.jpg","c0d838b183227ac600228c26c35d1436"],["/static/media/benchmade_tree_thumbnail.5b68f8f4.jpg","5b68f8f49a6213d21a35324f91e2a912"],["/static/media/blue_steam_thumbnail.9b88ad3a.jpg","9b88ad3a0950351c5d30f88ea8f75c8d"],["/static/media/boat_fog.a3bbe0e3.jpg","a3bbe0e3bfa8cdca498700b6d9d75ead"],["/static/media/boat_fog_thumbnail.42b0bcb1.jpg","42b0bcb1d5e74a66924b7da951e978d5"],["/static/media/charley_costa_thumbnail.3a5134fb.jpg","3a5134fb774e70ed165a8ca4b07b596a"],["/static/media/cheesman_black.a64322f6.jpg","a64322f6843ac3722544c88fde8f3842"],["/static/media/coin_watch_portfolio.c8404ec7.png","c8404ec7d8f82932a9ca53b82933dbe6"],["/static/media/colombia_fly.e610f6ba.jpg","e610f6ba93b7a330b918604caa149fb4"],["/static/media/colombia_fly_thumbnail.d3647ddc.jpg","d3647ddcbf7ee8f9a0b0b15bc042e8c4"],["/static/media/down-arrows.9d57c40e.svg","9d57c40ee4a00ea398e1944f5b833254"],["/static/media/elfin_cove_thumbnail.cb9eafb1.jpg","cb9eafb1111a4c4071af761c6676d4bc"],["/static/media/grande_tail_thumbnail.f5d82aef.jpg","f5d82aef5efebbc96823c8b1e151c12d"],["/static/media/hawaii_fly_thumbnail.521189ac.jpg","521189acd3be59dd1683a20ef99c68e2"],["/static/media/hero_before_canoe.2b642850.jpg","2b6428502d2e3810e13d1ead846e0e4c"],["/static/media/ipad-coin-watch.b30a3532.png","b30a35325b43cbcf3d39d9e19e5d2489"],["/static/media/iphone-coin-watch.2894c86b.png","2894c86b61ca223e6d3bb6b7b7c45056"],["/static/media/jakob_backcast_thumbnail.79c777a2.jpg","79c777a2e20ef4a72951afac1846aa27"],["/static/media/jakob_cheesman_thumbnail.4444323e.jpg","4444323e964d5600e7064002bb21465a"],["/static/media/janelle_hood_thumbnail.43ea31d4.jpg","43ea31d403b5d8d4d95b1dd65fbd66da"],["/static/media/janelle_royal_thumbnail.7148a9c5.jpg","7148a9c52c7a4956d07efa3755ec697f"],["/static/media/jeep_five_thumbnail.cd27262b.jpg","cd27262bf83f8f20d2d5c707323c3363"],["/static/media/kayla_buff_thumbnail.94b12e26.jpg","94b12e26f9f385844c300c388581fc2e"],["/static/media/kelty_couple_thumbnail.09cc15a0.jpg","09cc15a004d0f185ac75c87e99314149"],["/static/media/kelty_surfboard_thumbnail.9e111d06.jpg","9e111d06d7da48de833597563d92923c"],["/static/media/landon_reeling.5b1c0ec4.jpg","5b1c0ec4c04f33abfc282891d3094b76"],["/static/media/landon_reeling_thumbnail.72ffef07.jpg","72ffef0793fe7152d694e32743d4cf34"],["/static/media/landon_wheelie_thumbnail.2e7d8107.jpg","2e7d8107951647d1404b5e85a48dcb53"],["/static/media/loki_primo_thumbnail.95c758a5.jpg","95c758a535cc0b7e41cb8123c62d50b3"],["/static/media/macbook-coin-watch.781a05dc.png","781a05dcc74202380cbc817fa6ee1292"],["/static/media/matador_surf.d948dae0.jpg","d948dae0aee1121614250500dc8eccdf"],["/static/media/matador_surf_thumbnail.d43fcf27.jpg","d43fcf279cd76cb394c36553d673b778"],["/static/media/menu.a159269a.svg","a159269a67740e572f7f34c363bddbb5"],["/static/media/peacock_abel_thumbnail.e13fc971.jpg","e13fc97113b6f7cccdb6ca05faa9279f"],["/static/media/shyanne_casting_thumbnail.6141afcc.jpg","6141afcc2db36646abd187fd72c93c02"],["/static/media/shyanne_yeti_thumbnail.15fb2f37.jpg","15fb2f379486cd423e41edcc415b32b4"],["/static/media/ted_white.598478f2.jpg","598478f21d6bc2275dbbfc7bd8274df6"],["/static/media/ted_white_thumbnail.0817761a.jpg","0817761a1353ab03f173c0945e90dcba"],["/static/media/umpqua_blue.f7ce80ef.jpg","f7ce80ef720c13fffcb0cdaffa14935a"],["/static/media/umpqua_blue_thumbnail.fe951d18.jpg","fe951d1817ba363750473036b0aab434"],["/static/media/villian_after.fd0b0002.jpg","fd0b0002500619e83d7e6cfb4930d941"],["/static/media/villian_before.74c7a1a9.jpg","74c7a1a91956951e5e070433f3f50885"],["/static/media/welcome-screen.4b8f65f2.png","4b8f65f2641e5e9c8fe1095e0bad8e0e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
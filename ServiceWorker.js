importScripts('/js/workbox-sw.js');

if (workbox) {
  //workbox.setConfig({debug: true});
  //workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
  
  workbox.precaching.precacheAndRoute([
  {
    "url": "about.html",
    "revision": "62f8a21c2eb19e6c859b5cab6aba19e3"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.png",
    "revision": "47b18d063f4e2a915e614ca5a83cb68d"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "47b18d063f4e2a915e614ca5a83cb68d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "47b18d063f4e2a915e614ca5a83cb68d"
  },
  {
    "url": "favicon.ico",
    "revision": "64a5511a1a766cb33807e66fb2840cad"
  },
  {
    "url": "favicon.png",
    "revision": "1614141390dc3891bc2772598e0aa074"
  },
  {
    "url": "favicon.svg",
    "revision": "c2cfae70ae4b81718842ccf0bb8410aa"
  },
  {
    "url": "favicon2.ico",
    "revision": "052f3aabd83b6458c2adb1a1dc4e6173"
  },
  {
    "url": "footer.html",
    "revision": "a2fbf2746c2e1b8cb1d41a42113c298b"
  },
  {
    "url": "help.html",
    "revision": "cf07c1b3d852718c9dd1e2b2084ade59"
  },
  {
    "url": "images/icons/AEON144px.png",
    "revision": "f50a31957c4c1a4c1a8d653f3cd96c4f"
  },
  {
    "url": "index.html",
    "revision": "a9c04ef4f8c54a588bfa47531bf5dcc5"
  },
  {
    "url": "js/about.js",
    "revision": "7013eb3757c98291406bc968e948710a"
  },
  {
    "url": "js/bundle.js",
    "revision": "a8fc21471eb5b466da4d79985c04617c"
  },
  {
    "url": "js/init.js",
    "revision": "48a427c2e7809031a60c1f1c121d6623"
  },
  {
    "url": "js/workbox-sw.js",
    "revision": "748b3171fa158efb2ebfc2a0cec21d7c"
  },
  {
    "url": "layout.html",
    "revision": "a5a1496ff9c0c8c6a4c4e516a142de49"
  },
  {
    "url": "stylesheets/klodikeStyle.css",
    "revision": "2cb6c4965e62b192c2496f46c8a93200"
  }
]);
 
  /**
   * For third party sites:*/
  workbox.routing.registerRoute(new RegExp('^https://unpkg.com/(.*)'),
   workbox.strategies.staleWhileRevalidate(),
  );
  
  workbox.routing.registerRoute(new RegExp('^https://use.fontawesome.com/releases/(.*)'),
   workbox.strategies.cacheFirst(),
  );

  workbox.routing.registerRoute(new RegExp('^https://fonts.gstatic.com/(.*)'),
    workbox.strategies.cacheFirst(),
  );

  workbox.routing.registerRoute(new RegExp('^https://code.jquery.com/(.*)'),
    workbox.strategies.staleWhileRevalidate(),
  );    
  
  workbox.routing.registerRoute(new RegExp('^https://stackpath.bootstrapcdn.com/bootstrap/(.*)'),
    workbox.strategies.staleWhileRevalidate(),
  );


  workbox.routing.registerRoute(new RegExp('^https://cdnjs.cloudflare.com/ajax/libs/(.*)'),
    workbox.strategies.staleWhileRevalidate(),
  );

  workbox.routing.registerRoute(new RegExp('^https://dev.yellowfortyfour.com:3010/'),
    workbox.strategies.staleWhileRevalidate()
  );


} else {
  console.log('Workbox didn\'t load 😬');
}





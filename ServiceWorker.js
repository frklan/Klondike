importScripts('/js/workbox-sw.js');

if (workbox) {
  //workbox.setConfig({debug: true});
  //workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
  
  workbox.precaching.precacheAndRoute([
  {
    "url": "about.html",
    "revision": "d0b5e3503da2e7fff4c6d878286bcccd"
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
    "revision": "ced1b8376a7983ffa6c707b8b7b60536"
  },
  {
    "url": "images/icons/AEON144px.png",
    "revision": "f50a31957c4c1a4c1a8d653f3cd96c4f"
  },
  {
    "url": "index.html",
    "revision": "5b6a04bb2e7d65c1824fa11dd7117505"
  },
  {
    "url": "js/about.js",
    "revision": "7013eb3757c98291406bc968e948710a"
  },
  {
    "url": "js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "js/bundle.js",
    "revision": "9b5665ed906cf666df10f94023768231"
  },
  {
    "url": "js/fontawesome.js",
    "revision": "d179b64ca38524da0d5cd0ea1e9051df"
  },
  {
    "url": "js/init.js",
    "revision": "48a427c2e7809031a60c1f1c121d6623"
  },
  {
    "url": "js/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "js/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "js/workbox-sw.js",
    "revision": "748b3171fa158efb2ebfc2a0cec21d7c"
  },
  {
    "url": "layout.html",
    "revision": "f9d39551594e6e6525c7d655ff4edfe2"
  },
  {
    "url": "stylesheets/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "stylesheets/klodikeStyle.css",
    "revision": "2cb6c4965e62b192c2496f46c8a93200"
  }
]);
 
  /**
   * For third party sites:*/
  
  workbox.routing.registerRoute(new RegExp('^https://use.fontawesome.com/releases/(.*)'),
   workbox.strategies.cacheFirst(),
  );

  workbox.routing.registerRoute(new RegExp('^https://fonts.gstatic.com/(.*)'),
    workbox.strategies.cacheFirst(),
  );
  
} else {
  console.log('Workbox didn\'t load 😬');
}





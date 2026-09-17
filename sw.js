const CACHE = 'choicegrade-v6-heatpump';

const ASSETS = [
  './',
  'index.html',
  'app.html',
  'auth.html',
  'account.html',
  'marketing.css?v=6.4',
  'auth.css?v=6.2a',
  'styles.css?v=6.3',
  'install.js?v=6.4',
  'app.js?v=6.3',
  'access.js?v=6.2a',
  'auth.js?v=6.2a',
  'account.js?v=6.2a',
  'config.js',
  'manifest.json?v=6.3',
  'choicegrade-logo.png',
  'choicegrade-mark.png',
  'choicegrade-app-icon.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys => {
        return Promise.all(
          keys
            .filter(key => key !== CACHE)
            .map(key => caches.delete(key))
        );
      }),

      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store'
      }).catch(() => {
        return caches
          .match(event.request, {
            ignoreSearch: true
          })
          .then(response => {
            return response || caches.match('index.html');
          });
      })
    );

    return;
  }

  event.respondWith(
    fetch(event.request, {
      cache: 'no-store'
    })
      .then(response => {
        if (!response || response.status !== 200) {
          return response;
        }

        const copy = response.clone();

        caches.open(CACHE).then(cache => {
          cache.put(event.request, copy);
        });

        return response;
      })
      .catch(() => {
        return caches.match(event.request, {
          ignoreSearch: true
        });
      })
  );
});

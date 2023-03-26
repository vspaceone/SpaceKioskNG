/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.config.js > pwa > workboxPluginMode is set to "InjectManifest"
 */

import { precacheAndRoute } from 'workbox-precaching'
//import { ServiceWorker } from 'aws-amplify';
//const serviceWorker = new ServiceWorker();

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST)

// Register the service worker with `service-worker.js` with service worker scope `/`.
//registeredServiceWorker = await serviceWorker.register('/register-service-worker.js', '/');

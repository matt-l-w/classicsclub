importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
  const { registerRoute } = workbox.routing;
  const { NetworkFirst } = workbox.strategies;

  registerRoute(
    /\.(?:css|html|jpg)$/,
    new NetworkFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

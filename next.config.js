const withPWA = require('next-pwa');
module.exports = withPWA({
  reactStrictMode: true,
  env: {
    mongodb_username: 'USER',
    mongodb_password: 'EjNUYvRsc8b8tEsK',
    mongodb_cluster: 'cluster0',
    mongodb_database: 'myFirstDatabase',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    //...
  },
});

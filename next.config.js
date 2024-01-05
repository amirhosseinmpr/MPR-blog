const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withPWA = require('next-pwa');
module.exports = withPWA({
  reactStrictMode: true,
  env: {
    mongodb_username: 'HARRY',
    mongodb_password: 'BUWF9@ua6i$j69C',
    mongodb_cluster: 'cluster2',
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

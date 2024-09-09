// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];
const cache = require('koa-cache');


module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: ['article', 'user'], // Specify the models you want to cache
      type: 'memory',
      maxAge: 60000,
    },
  },
});
'use strict';

/**
 * manuscript service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manuscript.manuscript');

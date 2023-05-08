'use strict';

/**
 * greenhouse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::greenhouse.greenhouse');

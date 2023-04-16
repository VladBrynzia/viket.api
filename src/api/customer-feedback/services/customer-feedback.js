'use strict';

/**
 * customer-feedback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-feedback.customer-feedback');

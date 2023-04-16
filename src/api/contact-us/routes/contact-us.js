"use strict";

const verifyCaptcha = require("../../../../config/policies/verifyCaptcha");

/**
 * contact-us router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::contact-us.contact-us");

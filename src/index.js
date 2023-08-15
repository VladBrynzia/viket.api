"use strict";

// const verifyCaptcha = require("../config/policies/verifyCaptcha");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // const extensionService = strapi.plugin("graphql").service("extension");

    // extensionService.use({
    //   resolversConfig: {
    //     "Mutation.createContactUs": {
    //       /**
    //        * Querying the Categories content-type
    //        * bypasses the authorization system.
    //        */

    //       policies: [verifyCaptcha],
    //     },
    //   },
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_ADMIN_URL', process.env.STRAPI_ADMIN_URL),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', process.env.ADMIN_JWT_SECRET),
    },
  },
  hcaptchaSecret: env('HCAPTCHA_SECRET_KEY', process.env.HCAPTCHA_SECRET_KEY)
});

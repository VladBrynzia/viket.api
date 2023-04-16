const { verify } = require("hcaptcha");

module.exports = async (ctx, _, { strapi }) => {
  const secret = strapi.config.get("server.hcaptchaSecret");
  const token = ctx.http.request?.header['authorization'];

  if (!token) {
    return false;
  }

  try {
    let { success } = await verify(secret, token);

    if (success) {
      return true;

    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

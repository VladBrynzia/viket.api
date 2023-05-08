module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugin("email").services.email.send({
        to: process.env.CLIENT_EMAIL_ADDRESS,
        from: process.env.SMTP_EMAIL_ADDRESS,
        subject: "Contact form notification",
        html: `
        <h1> * * * </h1>
        <div>
          <h2>${result.name} sent you a new contact form.</h2>
          <p>User name: ${result.name}</p>
          <p>User phone: ${result.phone}</p>
          <p>Message: ${result.message}</p>
          <h3>Please check the CMS system for more details!</h3>
         </div>
         <h1> * * * </h1>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

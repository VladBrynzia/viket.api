module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugin("email").services.email.send({
        to: process.env.CLIENT_EMAIL_ADDRESS,
        from: process.env.SMTP_EMAIL_ADDRESS,
        subject: "Поступил заказ с сайта",
        html: `
        <h1> * * * </h1>
        <div>
          <h2>Данные заказа</h2>
          <h2>Заказчик: <b>${result.name}</b></h2>
          <h2>Контактный номер: <b>${result.phone}</b></h2>
          <h2>Позиции: ${result.message}</h2>
          <h1>Пожалуйста, обработайте заказ как можно скорее и свяжитесь с клиентом!</h1>
         </div>
         <h1> * * * </h1>`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};

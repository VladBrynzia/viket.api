module.exports = ({ env }) => ({
  editorjs: {
    enabled: true,
    resolve: "src/plugins/editorjs",
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.meta.ua"),
        port: env("SMTP_PORT", 465),
        auth: {
          user: env("SMTP_EMAIL_ADDRESS"),
          pass: env("SMTP_EMAIL_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_EMAIL_ADDRESS"),
        defaultReplyTo: env("CLIENT_EMAIL_ADDRESS"),
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
});

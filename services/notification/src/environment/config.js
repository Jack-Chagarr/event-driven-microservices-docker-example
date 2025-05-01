const config = {
  name: 'Notification Service',
  messagebus: process.env.MESSAGE_BUS || 'amqp://guest:guest@localhost',
  environment: process.env.ENVIRONMENT || 'dev',
  email: {
    service: process.env.EMAIL_SERVICE || 'gmail',
    username: process.env.EMAIL_ID || '이메일 주소',
    password: process.env.EMAIL_PASSWORD || '앱 패스워드',
    adminEmailID: process.env.ADMIN_EMAIL || '다른 이메일 주소',
  },
};

config.startedMessage = `${config.name} is running`;

module.exports = config;

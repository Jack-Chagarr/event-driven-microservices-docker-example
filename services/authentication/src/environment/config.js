const config = {
  name: 'Authentication Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8080,
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {uri: process.env.DB_URI || 'mongodb://{인스턴스의 외부 IP}:27017/testdb'},
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;

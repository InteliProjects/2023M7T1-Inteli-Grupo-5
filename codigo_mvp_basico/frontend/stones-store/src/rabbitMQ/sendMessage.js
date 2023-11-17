const amqp = require('amqplib/callback_api');

const rabbitmqHost = 'localhost:5672';

exports.sendMessage = function sendMessage(message){
    amqp.connect(`amqp://username:password@${rabbitmqHost}`, (err, connection) => {
  if (err) {
    throw err;
  }

  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    const queue = 'fila-pedidos';
    channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Mensagem enviada: ${message}`);

    setTimeout(() => {
      connection.close();
    }, 500);
  });
});
}

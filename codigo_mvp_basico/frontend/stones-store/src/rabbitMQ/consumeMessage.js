const amqp = require('amqplib/callback_api');
import createOrder from "../services/orders";

const rabbitmqHost = 'localhost:5672';

function consumeMessage(queue){
    queue = 'fila-pedidos';
    amqp.connect(`amqp://${rabbitmqHost}`, (err, connection) => {
        if (err) {
          throw err;
        }
      
        connection.createChannel((channelError, channel) => {
          if (channelError) {
            throw channelError;
          }
      
          channel.assertQueue(queue, { durable: false });
          console.log('Aguardando mensagens...');
      
          channel.consume(queue, async (msg) => {
            if (msg !== null) {
              console.log(`Mensagem recebida: ${msg.content.toString()}`);
              const response = await createOrder(msg.productId, msg.token);
            }
          }, { noAck: true });
        });
      });
}

consumeMessage('fila-pedidos')


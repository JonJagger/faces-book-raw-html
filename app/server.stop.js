
const PORT = process.env.NODE_PORT;
const HOST = '0.0.0.0';

const io = require('socket.io-client');
const socketClient = io.connect(`http://${HOST}:${PORT}`);

socketClient.on('connect', () => {
  socketClient.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});
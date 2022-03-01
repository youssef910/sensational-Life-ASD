import http from 'http';

import app from './app.js';
import { connectDb, disconnectDb } from './db.js';

const port = parseInt(process.env.PORT || '5000');

const server = http.createServer(app);

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  // eslint-disable-next-line no-console
  console.log(`Listening on ${bind}`);
});

process.on('SIGTERM', () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(port));

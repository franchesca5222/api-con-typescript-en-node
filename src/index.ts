import express from 'express';

import diaryRouter from './routes/diaries'

const findFreePort = require('find-free-port');

const app = express();

app.use(express.json());

findFreePort(3000, 3100, (err: any, freePort: number) => {
  if (err) {
    console.error('Error finding free port:', err);
    return;
  }

app.get('/ping', (_req, res) => {
  console.log('alguien pinged here!!');
  res.send('pong');

});

app.use('/api/diaries', diaryRouter);

app.listen(freePort, () => {
 console.log(`Servidor corriendo en ${freePort}`);
  });
});




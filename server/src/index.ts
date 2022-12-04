import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const response: string = 'server is working';
  res.send(response);
});

app.listen(5500, () => {
  console.log('listening on 5500');
});

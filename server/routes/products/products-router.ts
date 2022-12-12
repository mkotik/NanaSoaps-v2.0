import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('products router works');
});

export default router;

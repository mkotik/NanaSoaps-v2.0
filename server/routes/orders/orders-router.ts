import express from 'express';
import { getOrders } from './orders-model';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await getOrders();
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;

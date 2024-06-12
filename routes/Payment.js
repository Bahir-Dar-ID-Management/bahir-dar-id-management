import express from 'express';
const router = express.Router();
import { createPayment, readPayment, readPayments, updatePayment, deletePayment } from '../controllers/Payment.js';

router.post('/', createPayment);
router.get('/', readPayments);
router.get('/:id', readPayment);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default  router;
import express from 'express';
const router = express.Router();
import { createResidentAddress, readResidentAddress, readResidentAddresss, updateResidentAddress, deleteResidentAddress } from '../controllers/ResidentAddress.js';

router.post('/', createResidentAddress);
router.get('/', readResidentAddresss);
router.get('/:id', readResidentAddress);
router.put('/:id', updateResidentAddress);
router.delete('/:id', deleteResidentAddress);

export default  router;
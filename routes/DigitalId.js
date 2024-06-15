import express from 'express';
const router = express.Router();
import { createDigitalId, readDigitalId, readDigitalIds, updateDigitalId, deleteDigitalId } from '../controllers/DigitalId.js';

router.post('/', createDigitalId);
router.get('/', readDigitalIds);
router.get('/:id', readDigitalId);
router.put('/:id', updateDigitalId);
router.delete('/:id', deleteDigitalId);

export default  router;
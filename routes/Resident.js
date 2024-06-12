import express from 'express';
const router = express.Router();
import { createResident, readResident, readResidents, updateResident, deleteResident } from '../controllers/Resident.js';

router.post('/', createResident);
router.get('/', readResidents);
router.get('/:id', readResident);
router.put('/:id', updateResident);
router.delete('/:id', deleteResident);

export default  router;
import express from 'express';
const router = express.Router();
import { createKebeleResidentId, readKebeleResidentId, readKebeleResidentIds, updateKebeleResidentId, deleteKebeleResidentId } from '../controllers/KebeleResidentId.js'
router.post('/', createKebeleResidentId);
router.get('/', readKebeleResidentIds);
router.get('/:id', readKebeleResidentId);
router.put('/:id', updateKebeleResidentId);
router.delete('/:id', deleteKebeleResidentId);

export default  router;
import express from 'express';
const router = express.Router();
import { createResidentDoc, readResidentDoc, readResidentDocs, updateResidentDoc, deleteResidentDoc } from '../controllers/ResidentDoc.js';

router.post('/', createResidentDoc);
router.get('/', readResidentDocs);
router.get('/:id', readResidentDoc);
router.put('/:id', updateResidentDoc);
router.delete('/:id', deleteResidentDoc);

export default  router;
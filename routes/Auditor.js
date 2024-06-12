import express from 'express';
const router = express.Router();
import { createAuditor, readAuditor, readAuditors, updateAuditor, deleteAuditor } from '../controllers/Auditors.js';

router.post('/', createAuditor);
router.get('/', readAuditors);
router.get('/:id', readAuditor);
router.put('/:id', updateAuditor);
router.delete('/:id', deleteAuditor);

export default  router;
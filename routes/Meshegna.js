import express from 'express';
const router = express.Router();
import { createMeshegna, readMeshegna, readMeshegnas, updateMeshegna, deleteMeshegna } from '../controllers/Meshegna.js';

router.post('/', createMeshegna);
router.get('/', readMeshegnas);
router.get('/:id', readMeshegna);
router.put('/:id', updateMeshegna);
router.delete('/:id', deleteMeshegna);

export default  router;
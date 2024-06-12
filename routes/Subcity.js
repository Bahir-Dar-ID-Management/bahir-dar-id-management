import express from 'express';
const router = express.Router();
import { createSubcity, readSubcity, readSubcities, updateSubcity, deleteSubcity } from '../controllers/Subcity.js';

router.post('/', createSubcity);
router.get('/', readSubcities);
router.get('/:id', readSubcity);
router.put('/:id', updateSubcity);
router.delete('/:id', deleteSubcity);

export default  router;
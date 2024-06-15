import express from 'express';
const router = express.Router();
import { createKebeleOfSubcity, readKebeleOfSubcity, readKebeleOfSubcities, updateKebeleOfSubcity, deleteKebeleOfSubcity } from '../controllers/KebeleOfSubcity.js';

router.post('/', createKebeleOfSubcity);
router.get('/', readKebeleOfSubcities);
router.get('/:id', readKebeleOfSubcity);
router.put('/:id', updateKebeleOfSubcity);
router.delete('/:id', deleteKebeleOfSubcity);

export default  router;
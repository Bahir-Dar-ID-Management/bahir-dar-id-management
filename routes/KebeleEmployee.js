import express from 'express';
const router = express.Router();
import { createKebeleEmployee, readKebeleEmployee, readKebeleEmployees, updateKebeleEmployee, deleteKebeleEmployee } from '../controllers/KebeleEmployee.js';

router.post('/', createKebeleEmployee);
router.get('/', readKebeleEmployees);
router.get('/:id', readKebeleEmployee);
router.put('/:id', updateKebeleEmployee);
router.delete('/:id', deleteKebeleEmployee);

export default  router;
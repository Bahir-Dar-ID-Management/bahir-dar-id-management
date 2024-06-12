import express from 'express';
const router = express.Router();
import { createCentralEmployee, readCentralEmployee, readCentralEmployees, updateCentralEmployee, deleteCentralEmployee } from '../controllers/CentralEmployee.js';

router.post('/', createCentralEmployee);
router.get('/', readCentralEmployees);
router.get('/:id', readCentralEmployee);
router.put('/:id', updateCentralEmployee);
router.delete('/:id', deleteCentralEmployee);

export default  router;
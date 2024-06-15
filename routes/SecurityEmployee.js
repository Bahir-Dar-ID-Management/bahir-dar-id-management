import express from 'express';
const router = express.Router();
import { createSecurityEmployee, readSecurityEmployee, readSecurityEmployees, updateSecurityEmployee, deleteSecurityEmployee } from '../controllers/SecurityEmployee.js';

router.post('/', createSecurityEmployee);
router.get('/', readSecurityEmployees);
router.get('/:id', readSecurityEmployee);
router.put('/:id', updateSecurityEmployee);
router.delete('/:id', deleteSecurityEmployee);

export default  router;
import express from 'express';
const router = express.Router();
import { createMaintenanceEmployee, readMaintenanceEmployee, readMaintenanceEmployees, updateMaintenanceEmployee, deleteMaintenanceEmployee } from '../controllers/MaintenanceEmployee.js';

router.post('/', createMaintenanceEmployee);
router.get('/', readMaintenanceEmployees);
router.get('/:id', readMaintenanceEmployee);
router.put('/:id', updateMaintenanceEmployee);
router.delete('/:id', deleteMaintenanceEmployee);

export default  router;
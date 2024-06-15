import express from 'express';
const router = express.Router();
import { createEmergencyContact, readEmergencyContact, readEmergencyContacts, updateEmergencyContact, deleteEmergencyContact } from '../controllers/EmergencyContact.js';

router.post('/', createEmergencyContact);
router.get('/', readEmergencyContacts);
router.get('/:id', readEmergencyContact);
router.put('/:id', updateEmergencyContact);
router.delete('/:id', deleteEmergencyContact);

export default  router;
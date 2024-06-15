/**
 * @swagger
 * /emergencyContacts:
 *   get:
 *     summary: Retrieve a list of emergency contacts
 *     description: Retrieve a list of emergency contacts
 *     responses:
 *       200:
 *         description: A list of emergency contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EmergencyContact'
 * 
 * /emergencyContacts/{id}:
 *   get:
 *     summary: Get a specific emergency contact
 *     description: Get a specific emergency contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the emergency contact
 *     responses:
 *       200:
 *         description: A single emergency contact
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EmergencyContact'
 *       404:
 *         description: Emergency contact not found
 */

import EmergencyContact from '../models/EmergencyContact.js';

// Create EmergencyContact
const createEmergencyContact = async (req, res) => {
    const emergencyContact = new EmergencyContact(req.body);
    try {
        await emergencyContact.save();
        res.status(201).json(emergencyContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single EmergencyContact
const readEmergencyContact = async (req, res) => {
    try {
        const emergencyContact = await EmergencyContact.findById(req.params.id);
        if (!emergencyContact) return res.status(404).json({ message: 'EmergencyContact not found' });
        res.json(emergencyContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All EmergencyContacts
const readEmergencyContacts = async (req, res) => {
    try {
        const emergencyContacts = await EmergencyContact.find();
        res.json(emergencyContacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update EmergencyContact
const updateEmergencyContact = async (req, res) => {
    try {
        const emergencyContact = await EmergencyContact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!emergencyContact) return res.status(404).json({ message: 'EmergencyContact not found' });
        res.json(emergencyContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete EmergencyContact
const deleteEmergencyContact = async (req, res) => {
    try {
        const emergencyContact = await EmergencyContact.findByIdAndDelete(req.params.id);
        if (!emergencyContact) return res.status(404).json({ message: 'EmergencyContact not found' });
        res.json({ message: 'EmergencyContact successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createEmergencyContact, readEmergencyContacts, readEmergencyContact, updateEmergencyContact, deleteEmergencyContact }
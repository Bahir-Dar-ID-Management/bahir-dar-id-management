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
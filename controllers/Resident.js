import Resident from '../models/Resident.js';

// Create Resident
const createResident = async (req, res) => {
    const resident = new Resident(req.body);
    try {
        await resident.save();
        res.status(201).json(resident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single Resident
const readResident = async (req, res) => {
    try {
        const resident = await Resident.findById(req.params.id);
        if (!resident) return res.status(404).json({ message: 'Resident not found' });
        res.json(resident);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All Residents
const readResidents = async (req, res) => {
    try {
        const residents = await Resident.find();
        res.json(residents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Resident
const updateResident = async (req, res) => {
    try {
        const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!resident) return res.status(404).json({ message: 'Resident not found' });
        res.json(resident);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Resident
const deleteResident = async (req, res) => {
    try {
        const resident = await Resident.findByIdAndDelete(req.params.id);
        if (!resident) return res.status(404).json({ message: 'Resident not found' });
        res.json({ message: 'Resident successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createResident, readResidents, readResident, updateResident, deleteResident }
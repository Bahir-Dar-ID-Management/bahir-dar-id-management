import Subcity from '../models/Subcity.js';

// Create Subcity
const createSubcity = async (req, res) => {
    const subcity = new Subcity(req.body);
    try {
        await subcity.save();
        res.status(201).json(subcity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single Subcity
const readSubcity = async (req, res) => {
    try {
        const subcity = await Subcity.findById(req.params.id);
        if (!subcity) return res.status(404).json({ message: 'Subcity not found' });
        res.json(subcity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All Subcities
const readSubcities = async (req, res) => {
    try {
        const subsities = await Subcity.find();
        res.json(subsities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Subcity
const updateSubcity = async (req, res) => {
    try {
        const subcity = await Subcity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subcity) return res.status(404).json({ message: 'Subcity not found' });
        res.json(subcity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Subcity
const deleteSubcity = async (req, res) => {
    try {
        const subcity = await Subcity.findByIdAndDelete(req.params.id);
        if (!subcity) return res.status(404).json({ message: 'Subcity not found' });
        res.json({ message: 'Subcity successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createSubcity, readSubcities, readSubcity, updateSubcity, deleteSubcity }
import Meshegna from '../models/Meshegna.js';

// Create Meshegna
const createMeshegna = async (req, res) => {
    const meshegna = new Meshegna(req.body);
    try {
        await meshegna.save();
        res.status(201).json(meshegna);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single Meshegna
const readMeshegna = async (req, res) => {
    try {
        const meshegna = await Meshegna.findById(req.params.id);
        if (!meshegna) return res.status(404).json({ message: 'Meshegna not found' });
        res.json(meshegna);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All Meshegnas
const readMeshegnas = async (req, res) => {
    try {
        const meshegnas = await Meshegna.find();
        res.json(meshegnas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Meshegna
const updateMeshegna = async (req, res) => {
    try {
        const meshegna = await Meshegna.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!meshegna) return res.status(404).json({ message: 'Meshegna not found' });
        res.json(meshegna);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Meshegna
const deleteMeshegna = async (req, res) => {
    try {
        const meshegna = await Meshegna.findByIdAndDelete(req.params.id);
        if (!meshegna) return res.status(404).json({ message: 'Meshegna not found' });
        res.json({ message: 'Meshegna successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createMeshegna, readMeshegnas, readMeshegna, updateMeshegna, deleteMeshegna }
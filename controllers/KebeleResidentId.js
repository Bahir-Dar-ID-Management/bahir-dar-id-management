import KebeleResidentId from '../models/KebeleResidentId.js';

// Create KebeleResidentId
const createKebeleResidentId = async (req, res) => {
    const kebeleResidentId = new KebeleResidentId(req.body);
    try {
        await kebeleResidentId.save();
        res.status(201).json(kebeleResidentId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single KebeleResidentId
const readKebeleResidentId = async (req, res) => {
    try {
        const kebeleResidentId = await KebeleResidentId.findById(req.params.id);
        if (!kebeleResidentId) return res.status(404).json({ message: 'KebeleResidentId not found' });
        res.json(kebeleResidentId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All KebeleResidentIds
const readKebeleResidentIds = async (req, res) => {
    try {
        const kebeleResidentIds = await KebeleResidentId.find();
        res.json(kebeleResidentIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update KebeleResidentId
const updateKebeleResidentId = async (req, res) => {
    try {
        const kebeleResidentId = await KebeleResidentId.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!kebeleResidentId) return res.status(404).json({ message: 'KebeleResidentId not found' });
        res.json(kebeleResidentId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete KebeleResidentId
const deleteKebeleResidentId = async (req, res) => {
    try {
        const kebeleResidentId = await KebeleResidentId.findByIdAndDelete(req.params.id);
        if (!kebeleResidentId) return res.status(404).json({ message: 'KebeleResidentId not found' });
        res.json({ message: 'KebeleResidentId successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createKebeleResidentId, readKebeleResidentIds, readKebeleResidentId, updateKebeleResidentId, deleteKebeleResidentId }
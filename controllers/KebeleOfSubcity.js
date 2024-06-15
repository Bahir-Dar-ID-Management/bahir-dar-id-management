import KebeleOfSubcity from '../models/KebeleOfSubcity.js';

// Create KebeleOfSubcity
const createKebeleOfSubcity = async (req, res) => {
    const kebeleOfSubcity = new KebeleOfSubcity(req.body);
    try {
        await kebeleOfSubcity.save();
        res.status(201).json(kebeleOfSubcity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single KebeleOfSubcity
const readKebeleOfSubcity = async (req, res) => {
    try {
        const kebeleOfSubcity = await KebeleOfSubcity.findById(req.params.id);
        if (!kebeleOfSubcity) return res.status(404).json({ message: 'KebeleOfSubcity not found' });
        res.json(kebeleOfSubcity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All KebeleOfSubcities
const readKebeleOfSubcities = async (req, res) => {
    try {
        const kebeleOfSubcities = await KebeleOfSubcity.find();
        res.json(kebeleOfSubcities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update KebeleOfSubcity
const updateKebeleOfSubcity = async (req, res) => {
    try {
        const kebeleOfSubcity = await KebeleOfSubcity.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!kebeleOfSubcity) return res.status(404).json({ message: 'KebeleOfSubcity not found' });
        res.json(kebeleOfSubcity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete KebeleOfSubcity
const deleteKebeleOfSubcity = async (req, res) => {
    try {
        const kebeleOfSubcity = await KebeleOfSubcity.findByIdAndDelete(req.params.id);
        if (!kebeleOfSubcity) return res.status(404).json({ message: 'KebeleOfSubcity not found' });
        res.json({ message: 'KebeleOfSubcity successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createKebeleOfSubcity, readKebeleOfSubcities, readKebeleOfSubcity, updateKebeleOfSubcity, deleteKebeleOfSubcity }
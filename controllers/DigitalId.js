import DigitalId from '../models/DigitalId.js';

// Create DigitalId
const createDigitalId = async (req, res) => {
    const digitalId = new DigitalId(req.body);
    try {
        await digitalId.save();
        res.status(201).json(digitalId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single DigitalId
const readDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findById(req.params.id);
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json(digitalId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All DigitalIds
const readDigitalIds = async (req, res) => {
    try {
        const digitalIds = await DigitalId.find();
        res.json(digitalIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update DigitalId
const updateDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json(digitalId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete DigitalId
const deleteDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findByIdAndDelete(req.params.id);
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json({ message: 'DigitalId successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createDigitalId, readDigitalIds, readDigitalId, updateDigitalId, deleteDigitalId}
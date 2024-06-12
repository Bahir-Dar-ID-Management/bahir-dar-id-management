import IssueMissingId from '../models/IssueMissingId.js';

// Create IssueMissingId
const createIssueMissingId = async (req, res) => {
    const issueMissingId = new IssueMissingId(req.body);
    try {
        await issueMissingId.save();
        res.status(201).json(issueMissingId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single IssueMissingId
const readIssueMissingId = async (req, res) => {
    try {
        const issueMissingId = await IssueMissingId.findById(req.params.id);
        if (!issueMissingId) return res.status(404).json({ message: 'IssueMissingId not found' });
        res.json(issueMissingId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All IssueMissingIds
const readIssueMissingIds = async (req, res) => {
    try {
        const issueMissingIds = await IssueMissingId.find();
        res.json(issueMissingIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update IssueMissingId
const updateIssueMissingId = async (req, res) => {
    try {
        const issueMissingId = await IssueMissingId.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!issueMissingId) return res.status(404).json({ message: 'IssueMissingId not found' });
        res.json(issueMissingId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete IssueMissingId
const deleteIssueMissingId = async (req, res) => {
    try {
        const issueMissingId = await IssueMissingId.findByIdAndDelete(req.params.id);
        if (!issueMissingId) return res.status(404).json({ message: 'IssueMissingId not found' });
        res.json({ message: 'IssueMissingId successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 export { createIssueMissingId, readIssueMissingIds, readIssueMissingId, updateIssueMissingId, deleteIssueMissingId }
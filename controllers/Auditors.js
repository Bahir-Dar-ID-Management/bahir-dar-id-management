import Auditor from '../models/Auditors.js';

// Create Auditor
const createAuditor = async (req, res) => {
    const auditor = new Auditor(req.body);
    try {
        await auditor.save();
        res.status(201).json(auditor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single Auditor
const readAuditor = async (req, res) => {
    try {
        const auditor = await Auditor.findById(req.params.id);
        if (!auditor) return res.status(404).json({ message: 'Auditor not found' });
        res.json(auditor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All Auditors
const readAuditors = async (req, res) => {
    try {
        const auditors = await Auditor.find();
        res.json(auditors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Auditor
const updateAuditor = async (req, res) => {
    try {
        const auditor = await Auditor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!auditor) return res.status(404).json({ message: 'Auditor not found' });
        res.json(auditor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Auditor
const deleteAuditor = async (req, res) => {
    try {
        const auditor = await Auditor.findByIdAndDelete(req.params.id);
        if (!auditor) return res.status(404).json({ message: 'Auditor not found' });
        res.json({ message: 'Auditor successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createAuditor, readAuditors, readAuditor, updateAuditor, deleteAuditor };
import ResidentDoc from '../models/ResidentDoc.js';

// Create ResidentDoc
const createResidentDoc = async (req, res) => {
    const residentDoc = new ResidentDoc(req.body);
    try {
        await residentDoc.save();
        res.status(201).json(residentDoc);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single ResidentDoc
const readResidentDoc = async (req, res) => {
    try {
        const residentDoc = await ResidentDoc.findById(req.params.id);
        if (!residentDoc) return res.status(404).json({ message: 'ResidentDoc not found' });
        res.json(residentDoc);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All ResidentDocs
const readResidentDocs = async (req, res) => {
    try {
        const residentDocs = await ResidentDoc.find();
        res.json(residentDocs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update ResidentDoc
const updateResidentDoc = async (req, res) => {
    try {
        const residentDoc = await ResidentDoc.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!residentDoc) return res.status(404).json({ message: 'ResidentDoc not found' });
        res.json(residentDoc);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete ResidentDoc
const deleteResidentDoc = async (req, res) => {
    try {
        const residentDoc = await ResidentDoc.findByIdAndDelete(req.params.id);
        if (!residentDoc) return res.status(404).json({ message: 'ResidentDoc not found' });
        res.json({ message: 'ResidentDoc successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createResidentDoc, readResidentDocs, readResidentDoc, updateResidentDoc, deleteResidentDoc }
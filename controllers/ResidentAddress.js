import ResidentAddress from '../models/ResidentAddress.js';

// Create ResidentAddress
const createResidentAddress = async (req, res) => {
    const residentAddress = new ResidentAddress(req.body);
    try {
        await residentAddress.save();
        res.status(201).json(residentAddress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single ResidentAddress
const readResidentAddress = async (req, res) => {
    try {
        const residentAddress = await ResidentAddress.findById(req.params.id);
        if (!residentAddress) return res.status(404).json({ message: 'ResidentAddress not found' });
        res.json(residentAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All ResidentAddresses
const readResidentAddresses = async (req, res) => {
    try {
        const residentAddresses = await ResidentAddress.find();
        res.json(residentAddresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update ResidentAddress
const updateResidentAddress = async (req, res) => {
    try {
        const residentAddress = await ResidentAddress.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!residentAddress) return res.status(404).json({ message: 'ResidentAddress not found' });
        res.json(residentAddress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete ResidentAddress
const deleteResidentAddress = async (req, res) => {
    try {
        const residentAddress = await ResidentAddress.findByIdAndDelete(req.params.id);
        if (!residentAddress) return res.status(404).json({ message: 'ResidentAddress not found' });
        res.json({ message: 'ResidentAddress successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createResidentAddress, readResidentAddresses, readResidentAddress, updateResidentAddress, deleteResidentAddress }
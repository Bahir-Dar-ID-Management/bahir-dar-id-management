import KebeleEmployee from '../models/KebeleEmployee.js';

// Create KebeleEmployee
const createKebeleEmployee = async (req, res) => {
    const kebeleEmployee = new KebeleEmployee(req.body);
    try {
        await kebeleEmployee.save();
        res.status(201).json(kebeleEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single KebeleEmployee
const readKebeleEmployee = async (req, res) => {
    try {
        const kebeleEmployee = await KebeleEmployee.findById(req.params.id);
        if (!kebeleEmployee) return res.status(404).json({ message: 'KebeleEmployee not found' });
        res.json(kebeleEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All KebeleEmployees
const readKebeleEmployees = async (req, res) => {
    try {
        const kebeleEmployees = await KebeleEmployee.find();
        res.json(kebeleEmployees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update KebeleEmployee
const updateKebeleEmployee = async (req, res) => {
    try {
        const kebeleEmployee = await KebeleEmployee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!kebeleEmployee) return res.status(404).json({ message: 'KebeleEmployee not found' });
        res.json(kebeleEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete KebeleEmployee
const deleteKebeleEmployee = async (req, res) => {
    try {
        const kebeleEmployee = await KebeleEmployee.findByIdAndDelete(req.params.id);
        if (!kebeleEmployee) return res.status(404).json({ message: 'KebeleEmployee not found' });
        res.json({ message: 'KebeleEmployee successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createKebeleEmployee, readKebeleEmployees, readKebeleEmployee, updateKebeleEmployee, deleteKebeleEmployee }
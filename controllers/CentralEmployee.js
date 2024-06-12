import CentralEmployee from '../models/CentralEmployee.js';

// Create CentralEmployee
const createCentralEmployee = async (req, res) => {
    const centralEmployee = new CentralEmployee(req.body);
    try {
        await centralEmployee.save();
        res.status(201).json(centralEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single CentralEmployee
const readCentralEmployee = async (req, res) => {
    try {
        const centralEmployee = await CentralEmployee.findById(req.params.id);
        if (!centralEmployee) return res.status(404).json({ message: 'CentralEmployee not found' });
        res.json(centralEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All CentralEmployees
const readCentralEmployees = async (req, res) => {
    try {
        const centralEmployees = await CentralEmployee.find();
        res.json(centralEmployees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update CentralEmployee
const updateCentralEmployee = async (req, res) => {
    try {
        const centralEmployee = await CentralEmployee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!centralEmployee) return res.status(404).json({ message: 'CentralEmployee not found' });
        res.json(centralEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete CentralEmployee
const deleteCentralEmployee = async (req, res) => {
    try {
        const centralEmployee = await CentralEmployee.findByIdAndDelete(req.params.id);
        if (!centralEmployee) return res.status(404).json({ message: 'CentralEmployee not found' });
        res.json({ message: 'CentralEmployee successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createCentralEmployee, readCentralEmployees, readCentralEmployee, updateCentralEmployee, deleteCentralEmployee}
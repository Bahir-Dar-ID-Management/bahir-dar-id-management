import SecurityEmployee from '../models/SecurityEmployee.js';

// Create SecurityEmployee
const createSecurityEmployee = async (req, res) => {
    const secuirtyEmployee = new SecurityEmployee(req.body);
    try {
        await secuirtyEmployee.save();
        res.status(201).json(secuirtyEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single SecurityEmployee
const readSecurityEmployee = async (req, res) => {
    try {
        const secuirtyEmployee = await SecurityEmployee.findById(req.params.id);
        if (!secuirtyEmployee) return res.status(404).json({ message: 'SecurityEmployee not found' });
        res.json(secuirtyEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All SecurityEmployees
const readSecurityEmployees = async (req, res) => {
    try {
        const secuirtyEmployees = await SecurityEmployee.find();
        res.json(secuirtyEmployees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update SecurityEmployee
const updateSecurityEmployee = async (req, res) => {
    try {
        const secuirtyEmployee = await SecurityEmployee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!secuirtyEmployee) return res.status(404).json({ message: 'SecurityEmployee not found' });
        res.json(secuirtyEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete SecurityEmployee
const deleteSecurityEmployee = async (req, res) => {
    try {
        const secuirtyEmployee = await SecurityEmployee.findByIdAndDelete(req.params.id);
        if (!secuirtyEmployee) return res.status(404).json({ message: 'SecurityEmployee not found' });
        res.json({ message: 'SecurityEmployee successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createSecurityEmployee, readSecurityEmployees, readSecurityEmployee, updateSecurityEmployee, deleteSecurityEmployee }
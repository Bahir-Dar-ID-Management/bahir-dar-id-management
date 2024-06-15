import MaintenanceEmployee from '../models/MaintenanceEmployee.js';

// Create MaintenanceEmployee
const createMaintenanceEmployee = async (req, res) => {
    const maintenanceEmployee = new MaintenanceEmployee(req.body);
    try {
        await maintenanceEmployee.save();
        res.status(201).json(maintenanceEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single MaintenanceEmployee
const readMaintenanceEmployee = async (req, res) => {
    try {
        const maintenanceEmployee = await MaintenanceEmployee.findById(req.params.id);
        if (!maintenanceEmployee) return res.status(404).json({ message: 'MaintenanceEmployee not found' });
        res.json(maintenanceEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All MaintenanceEmployees
const readMaintenanceEmployees = async (req, res) => {
    try {
        const maintenanceEmployees = await MaintenanceEmployee.find();
        res.json(maintenanceEmployees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update MaintenanceEmployee
const updateMaintenanceEmployee = async (req, res) => {
    try {
        const maintenanceEmployee = await MaintenanceEmployee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!maintenanceEmployee) return res.status(404).json({ message: 'MaintenanceEmployee not found' });
        res.json(maintenanceEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete MaintenanceEmployee
const deleteMaintenanceEmployee = async (req, res) => {
    try {
        const maintenanceEmployee = await MaintenanceEmployee.findByIdAndDelete(req.params.id);
        if (!maintenanceEmployee) return res.status(404).json({ message: 'MaintenanceEmployee not found' });
        res.json({ message: 'MaintenanceEmployee successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createMaintenanceEmployee, readMaintenanceEmployees, readMaintenanceEmployee, updateMaintenanceEmployee, deleteMaintenanceEmployee }
/**
 * @swagger
 * tags:
 *   name: CentralEmployees
 *   description: API for central employees
 */

/**
 * @swagger
 * /centralEmployees:
 *   get:
 *     summary: Retrieve a list of central employees
 *     tags: [CentralEmployees]
 *     description: Retrieve a list of central employees
 *     responses:
 *       200:
 *         description: A list of central employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CentralEmployee'
 *   post:
 *     summary: Create a new central employee
 *     tags: [CentralEmployees]
 *     description: Create a new central employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CentralEmployee'
 *     responses:
 *       201:
 *         description: The created central employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CentralEmployee'
 *
 * /centralEmployees/{id}:
 *   get:
 *     summary: Get a specific central employee
 *     tags: [CentralEmployees]
 *     description: Get a specific central employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the central employee
 *     responses:
 *       200:
 *         description: A single central employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CentralEmployee'
 *       404:
 *         description: Central employee not found
 *   put:
 *     summary: Update a central employee
 *     tags: [CentralEmployees]
 *     description: Update a central employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the central employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CentralEmployee'
 *     responses:
 *       200:
 *         description: The updated central employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CentralEmployee'
 *       404:
 *         description: Central employee not found
 *   delete:
 *     summary: Delete a central employee
 *     tags: [CentralEmployees]
 *     description: Delete a central employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the central employee
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Central employee not found
 */

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
/**
 * @swagger
 * tags:
 *   name: Auditors
 *   description: API for auditors
 */

/**
 * @swagger
 * /auditors:
 *   get:
 *     summary: Retrieve a list of auditors
 *     tags: [Auditors]
 *     responses:
 *       200:
 *         description: A list of auditors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Auditor'
 *   post:
 *     summary: Create a new auditor
 *     tags: [Auditors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auditor'
 *     responses:
 *       201:
 *         description: The created auditor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auditor'
 *
 * /auditors/{id}:
 *   get:
 *     summary: Get a specific auditor
 *     tags: [Auditors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the auditor
 *     responses:
 *       200:
 *         description: A single auditor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auditor'
 *       404:
 *         description: Auditor not found
 *   put:
 *     summary: Update an auditor
 *     tags: [Auditors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the auditor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auditor'
 *     responses:
 *       200:
 *         description: The updated auditor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auditor'
 *       404:
 *         description: Auditor not found
 *   delete:
 *     summary: Delete an auditor
 *     tags: [Auditors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the auditor
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Auditor not found
 */

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
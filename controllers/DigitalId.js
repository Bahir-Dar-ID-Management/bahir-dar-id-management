/**
 * @swagger
 * /digitalIds:
 *   get:
 *     summary: Retrieve a list of digital IDs
 *     description: Retrieve a list of digital IDs
 *     responses:
 *       200:
 *         description: A list of digital IDs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DigitalId'
 * 
 * /digitalIds/{id}:
 *   get:
 *     summary: Get a specific digital ID
 *     description: Get a specific digital ID by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the digital ID
 *     responses:
 *       200:
 *         description: A single digital ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DigitalId'
 *       404:
 *         description: Digital ID not found
 */

import DigitalId from '../models/DigitalId.js';

// Create DigitalId
const createDigitalId = async (req, res) => {
    const digitalId = new DigitalId(req.body);
    try {
        await digitalId.save();
        res.status(201).json(digitalId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single DigitalId
const readDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findById(req.params.id);
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json(digitalId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All DigitalIds
const readDigitalIds = async (req, res) => {
    try {
        const digitalIds = await DigitalId.find();
        res.json(digitalIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update DigitalId
const updateDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json(digitalId);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete DigitalId
const deleteDigitalId = async (req, res) => {
    try {
        const digitalId = await DigitalId.findByIdAndDelete(req.params.id);
        if (!digitalId) return res.status(404).json({ message: 'DigitalId not found' });
        res.json({ message: 'DigitalId successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createDigitalId, readDigitalIds, readDigitalId, updateDigitalId, deleteDigitalId}
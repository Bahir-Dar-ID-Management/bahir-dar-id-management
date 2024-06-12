import IssueChangeKebele from '../models/IssueChangeKebele.js';

// Create IssueChangeKebele
const createIssueChangeKebele = async (req, res) => {
    const issueChangeKebele = new IssueChangeKebele(req.body);
    try {
        await issueChangeKebele.save();
        res.status(201).json(issueChangeKebele);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read Single IssueChangeKebele
const readIssueChangeKebele = async (req, res) => {
    try {
        const issueChangeKebele = await IssueChangeKebele.findById(req.params.id);
        if (!issueChangeKebele) return res.status(404).json({ message: 'IssueChangeKebele not found' });
        res.json(issueChangeKebele);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read All IssueChangeKebeles
const readIssueChangeKebeles = async (req, res) => {
    try {
        const issueChangeKebeles = await IssueChangeKebele.find();
        res.json(issueChangeKebeles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update IssueChangeKebele
const updateIssueChangeKebele = async (req, res) => {
    try {
        const issueChangeKebele = await IssueChangeKebele.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!issueChangeKebele) return res.status(404).json({ message: 'IssueChangeKebele not found' });
        res.json(issueChangeKebele);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete IssueChangeKebele
const deleteIssueChangeKebele = async (req, res) => {
    try {
        const issueChangeKebele = await IssueChangeKebele.findByIdAndDelete(req.params.id);
        if (!issueChangeKebele) return res.status(404).json({ message: 'IssueChangeKebele not found' });
        res.json({ message: 'IssueChangeKebele successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createIssueChangeKebele, readIssueChangeKebeles, readIssueChangeKebele, updateIssueChangeKebele, deleteIssueChangeKebele }
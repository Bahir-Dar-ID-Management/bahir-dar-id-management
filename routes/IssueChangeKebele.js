import express from 'express';
const router = express.Router();
import { createIssueChangeKebele, readIssueChangeKebele, readIssueChangeKebeles, updateIssueChangeKebele, deleteIssueChangeKebele } from '../controllers/IssueChangeKebele.js';

router.post('/', createIssueChangeKebele);
router.get('/', readIssueChangeKebeles);
router.get('/:id', readIssueChangeKebele);
router.put('/:id', updateIssueChangeKebele);
router.delete('/:id', deleteIssueChangeKebele);

export default  router;
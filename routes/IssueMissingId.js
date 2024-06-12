import express from 'express';
const router = express.Router();
import { createIssueMissingId, readIssueMissingId, readIssueMissingIds, updateIssueMissingId, deleteIssueMissingId } from '../controllers/IssueMissingId.js';

router.post('/', createIssueMissingId);
router.get('/', readIssueMissingIds);
router.get('/:id', readIssueMissingId);
router.put('/:id', updateIssueMissingId);
router.delete('/:id', deleteIssueMissingId);

export default  router;
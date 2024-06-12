import mongoose from 'mongoose';

const AuditorsSchema = new mongoose.Schema({
    EID: { type: String, required: true }
});

export default  mongoose.model('Auditors', AuditorsSchema);

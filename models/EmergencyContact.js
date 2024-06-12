import mongoose from 'mongoose';

const EmergencyContactSchema = new mongoose.Schema({
    ResidentID: { type: String, required: true },
    emName: { type: String, required: true },
    emFName: { type: String, required: true },
    emGFName: { type: String, required: true },
    emPhone: { type: Number, required: true }
});

export default mongoose.model('EmergencyContact', EmergencyContactSchema);

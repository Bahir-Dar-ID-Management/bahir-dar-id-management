import mongoose from 'mongoose';

const DigitalIdSchema = new mongoose.Schema({
    ResidentId: { type: String, required: true },
    subcity: { type: String, required: true },
    Kebele: { type: String, required: true },
    HouseNo: { type: Number, required: true }
});

export default mongoose.model('DigitalId', DigitalIdSchema);

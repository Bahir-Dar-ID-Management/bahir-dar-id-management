import mongoose from 'mongoose';

const KebeleResidentIdSchema = new mongoose.Schema({
    ResidentId: { type: String, required: true },
    subcity: { type: String, required: true },
    Kebele: { type: String, required: true },
    HouseNo: { type: Number, required: true }
});

export default mongoose.model('KebeleResidentId', KebeleResidentIdSchema);

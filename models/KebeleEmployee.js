import mongoose from 'mongoose';

const KebeleEmployeeSchema = new mongoose.Schema({
    EID: { type: String, required: true, unique: true },
    Kebele: { type: String, required: true },
    subcity: { type: String, required: true },
    KebeleRole: { type: String, required: true }
});

export default mongoose.model('KebeleEmployee', KebeleEmployeeSchema);

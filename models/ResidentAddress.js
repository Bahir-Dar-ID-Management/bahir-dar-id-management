import mongoose from 'mongoose';

const ResidentAddressSchema = new mongoose.Schema({
    ResidentID: { type: String, required: true, unique: true },
    subcity: { type: String, required: true },
    Kebele: { type: String, required: true },
    HouseNo: { type: Number, required: true }
});

export default mongoose.model('ResidentAddress', ResidentAddressSchema);

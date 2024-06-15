import mongoose from 'mongoose';

const KebeleOfSubcitySchema = new mongoose.Schema({
    KebeleName: { type: String, required: true },
    SName: { type: String, required: true }
});

export default mongoose.model('KebeleOfSubcity', KebeleOfSubcitySchema);

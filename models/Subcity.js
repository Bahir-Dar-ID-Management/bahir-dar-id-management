import mongoose from 'mongoose';

const SubcitySchema = new mongoose.Schema({
    city: { type: String, required: true },
    NoOfKebele: { type: Number, required: true },
    Area: { type: Number, required: true }
});

export default mongoose.model('Subcity', SubcitySchema);

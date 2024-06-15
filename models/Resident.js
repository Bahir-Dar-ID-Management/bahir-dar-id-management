import mongoose from 'mongoose';

const ResidentSchema = new mongoose.Schema({
    ResidentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    Fathername: { type: String, required: true },
    GrandFName: { type: String, required: true },
    DOB: { type: Date, required: true },
    POB: { type: String, required: true },
    Sex: { type: String, required: true },
    Phone: { type: Number, required: true },
    Citizenship: { type: String, required: true },
    Job: { type: String, required: true }
});

export default mongoose.model('Resident', ResidentSchema);

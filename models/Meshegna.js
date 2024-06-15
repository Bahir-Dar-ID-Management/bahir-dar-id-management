import mongoose from 'mongoose';

const MeshegnaSchema = new mongoose.Schema({
    ResidentID: { type: String, required: true },
    DepartedKebele: { type: String, required: true },
    DestinationKebele: { type: String, required: true },
    DepartedSubc: { type: String, required: true },
    DestinationSubc: { type: String, required: true },
    issuedDate: { type: Date, required: true },
    ExpDate: { type: Date, required: true },
    ExpStatus: { type: String, required: true }
});

export default mongoose.model('Meshegna', MeshegnaSchema);

import mongoose from 'mongoose';

const ResidentDocSchema = new mongoose.Schema({
    ResidentID: { type: String, required: true },
    BCertificate: { type: String, required: true }, // file path
    HouseBP: { type: String, required: true }, // file path
    Education: { type: String, required: true } // file path
});

export default mongoose.model('ResidentDoc', ResidentDocSchema);

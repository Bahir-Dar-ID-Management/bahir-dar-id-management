import mongoose from 'mongoose';

const IssueMissingIdSchema = new mongoose.Schema({
    KebeleName: { type: String, required: true },
    issuedDate: { type: Date, required: true },
    name: { type: String, required: true },
    Fathername: { type: String, required: true },
    emName: { type: String, required: true },
    newWatr: { type: Number, required: true }
});

export default mongoose.model('IssueMissingId', IssueMissingIdSchema);

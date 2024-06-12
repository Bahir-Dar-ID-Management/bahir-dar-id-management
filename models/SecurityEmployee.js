import mongoose from 'mongoose';

const SecurityEmployeeSchema = new mongoose.Schema({
    EID: { type: String, required: true, unique: true },
    EName: { type: String, required: true },
    EFName: { type: String, required: true },
    EGFName: { type: String, required: true }
});

export default mongoose.model('SecurityEmployee', SecurityEmployeeSchema);

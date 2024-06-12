import mongoose from 'mongoose';

const MaintenanceEmployeeSchema = new mongoose.Schema({
    EID: { type: String, required: true, unique: true },
    EPhone: { type: Number, required: true },
    EName: { type: String, required: true },
    EFName: { type: String, required: true },
    EGFName: { type: String, required: true }
});

export default mongoose.model('MaintenanceEmployee', MaintenanceEmployeeSchema);

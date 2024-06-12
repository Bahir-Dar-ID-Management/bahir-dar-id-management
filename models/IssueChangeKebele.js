import mongoose from 'mongoose';

const IssueChangeKebeleSchema = new mongoose.Schema({
    newKebele: { type: String, required: true },
    oldKebele: { type: Number, required: true },
    ResidentId: { type: String, required: true },
    name: { type: String, required: true },
    Fathername: { type: String, required: true },
    GrandFName: { type: String, required: true }
});

export default mongoose.model('IssueChangeKebele', IssueChangeKebeleSchema);

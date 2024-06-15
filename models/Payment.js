import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    newPay: { type: String, required: true },
    issuePay: { type: String, required: true },
    ResidentId: { type: String, required: true },
    name: { type: String, required: true }
});

export default mongoose.model('Payment', PaymentSchema);

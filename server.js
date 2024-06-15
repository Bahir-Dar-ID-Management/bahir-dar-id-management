import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swaggerConfig.js';
 
import auditorRoutes from './routes/Auditor.js';
import centralEmployeeRoutes from './routes/CentralEmployee.js';
import emergencyContactRoutes from './routes/EmergencyContact.js';
import issueChangeKebeleRoutes from './routes/IssueChangeKebele.js';
import issueMissingIdRoutes from './routes/IssueMissingId.js';
import residentDocRoutes from './routes/ResidentDoc.js';
import residentRoutes from './routes/Resident.js';
import digitalIdRoutes from './routes/DigitalId.js';
import meshegnaRoutes from './routes/Meshegna.js';
import kebeleResidentIdRoutes from './routes/KebeleResidentId.js';
import kebeleOfSubcitiesRoutes from './routes/KebeleOfSubcity.js';
import kebeleEmployeeRoutes from './routes/KebeleEmployee.js';
import maintenanceEmployeeRoutes from './routes/MaintenanceEmployee.js';
import subcityRoutes from './routes/Subcity.js';
import securityEmployeeRoutes from './routes/SecurityEmployee.js';
import paymentRoutes from './routes/Payment.js';




mongoose.connect("mongodb://localhost:27017/bahirdar-id-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(bodyParser.json());

app.use('/api/auditors', auditorRoutes);
app.use('/api/central-employees', centralEmployeeRoutes);
app.use('/api/emergency-contacts', emergencyContactRoutes);
app.use('/api/issue-change-kebeles', issueChangeKebeleRoutes);
app.use('/api/issue-missing-ids', issueMissingIdRoutes);
app.use('/api/resident-docs', residentDocRoutes);
app.use('/api/residents', residentRoutes);
app.use('/api/digital-ids', digitalIdRoutes);
app.use('/api/meshegnas', meshegnaRoutes);
app.use('/api/kebele-resident-ids', kebeleResidentIdRoutes);
app.use('/api/kebele-of-subcities', kebeleOfSubcitiesRoutes);
app.use('/api/kebele-employees', kebeleEmployeeRoutes);
app.use('/api/maintenance-employees', maintenanceEmployeeRoutes);
app.use('/api/subcities', subcityRoutes);
app.use('/api/security-employees', securityEmployeeRoutes);
app.use('/api/payments', paymentRoutes);

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
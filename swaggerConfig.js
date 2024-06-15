import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for the project'
        },
        tags: [
            {
                name: 'Auditors',
                description: 'API for auditors'
            },
            {
                name: 'CentralEmployees',
                description: 'API for central employees'
            },
            // Add tags for other models/controllers here
        ]
    },
    apis: ['./controllers/*.js'] // Adjust the path as necessary
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default swaggerDocs;

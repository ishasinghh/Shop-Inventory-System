import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop Inventory System APIs",
      version: "1.0.0",
      description: "API documentation for the Shop Inventory System.",
    },
    servers: [
      {
        url: "http://localhost:3000/v1",
      },
    ],
  },
  apis: ["./src/swagger/swagger.yaml"], // Path to the YAML files
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };

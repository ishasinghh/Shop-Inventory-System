import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { requestLogger } from "./utils/requestLogger";
import { config } from "./config";
import { connectDb } from "./dbConnection/dbConnection";
import inventoryRoutes from "./routes/inventoryRoutes";
import billRoutes from "./routes/billRoutes";
import { swaggerSpec, swaggerUi } from "./utils/swagger";

dotenv.config();

const app = express();
const PORT = config.port;

// Middleware
app.use(bodyParser.json());
app.use(requestLogger);

app.use("/v1", inventoryRoutes);
app.use("/v1", billRoutes);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
    process.exit(1);
  }
};

startServer();

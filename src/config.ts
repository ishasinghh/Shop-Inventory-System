import dotenv from "dotenv";

dotenv.config();

interface ConfigType {
  port: number;
  mongoURI: string;
}

export const config: ConfigType = {
  port: parseInt(process.env.PORT || "3000", 10),
  mongoURI:
    process.env.MONGO_URI || "mongodb://localhost:27017/shop_inventory_system",
};

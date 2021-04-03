import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Recipe";
import "./models/User";

const PORT = process.env.PORT || 3000;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
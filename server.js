import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Backend running on Vercel");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on port " + port));










// import express from "express";
// import dotenv from "dotenv";
// import userRoutes from "./routes/user.routes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// app.use("/api", userRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

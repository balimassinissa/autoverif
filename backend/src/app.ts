import express from "express";
import authRoutes from "./routes/auth";
import advertsRoutes from "./routes/adverts";
import uploadsRoutes from "./routes/uploads";

const app = express();
app.use(express.json());

app.get("/", (_, res) => res.send("autoverif backend ok"));
app.use("/auth", authRoutes);
app.use("/adverts", advertsRoutes);
app.use("/uploads", uploadsRoutes);

export default app;

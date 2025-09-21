// importer les types comme type-only import (utile même en CommonJS)
import type { Request, Response } from "express";

const express = require("express"); // CommonJS require
const app = express();
const PORT = 3000;

// route typée
app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

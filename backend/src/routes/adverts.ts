import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.json({ message: "adverts route ok" });
});

export default router;

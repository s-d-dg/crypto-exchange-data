import { Router } from "express";

const router = Router();

router.get("/historic-data", (req, res) => {
  const symbol = req.query.symbol;
  res.send(`Historic data endpoint for ${symbol}`);
});

export const historicDataRouter = router;

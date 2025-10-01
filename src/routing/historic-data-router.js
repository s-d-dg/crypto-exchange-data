import { Router } from "express";
import { fetchHistoricData, avgPrice } from "../services/binance.js";

const router = Router();

router.get("/historic-data", async (req, res) => {
  const { symbol, from, to } = req.query;
  const fromInMilis = new Date(from).getTime();
  const toInMilis = new Date(to).getTime();

  const results = await fetchHistoricData(symbol, fromInMilis, toInMilis);
  res.json({
    description: `Historic data endpoint for ${symbol}`,
    data: results.data,
  });
});

export const historicDataRouter = router;

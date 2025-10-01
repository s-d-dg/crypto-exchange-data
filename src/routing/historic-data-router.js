import { Router } from "express";
import { fetchHistoricData, avgPrice } from "../services/binance.js";

const router = Router();

router.get("/historic-data", async (req, res) => {
  const { symbol, from, to } = req.query;
  const fromInMilis = new Date(from).getTime();
  const toInMilis = new Date(to).getTime();

  console.log({ symbol, fromInMilis, toInMilis });
  const results = await fetchHistoricData(symbol, fromInMilis, toInMilis);
  res.json({
    description: `Historic data endpoint for ${symbol}`,
    data: results.data,
  });
});

router.get("/avgPrice", async (req, res) => {
  const { symbol } = req.query;

  const result = await avgPrice(symbol);
  res.json({
    description: `Average price endpoint for ${symbol}`,
    data: result,
  });
});

export const historicDataRouter = router;

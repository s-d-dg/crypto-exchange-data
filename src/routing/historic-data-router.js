import { Router } from "express";
import { fetchHistoricData } from "../services/binance.js";

const router = Router();

router.get("/historic-data", async (req, res) => {
  const { symbol, from, to } = req.query;
  const fromInMilis = new Date(from).getTime();
  const toInMilis = new Date(to).getTime();

  console.log({ symbol, fromInMilis, toInMilis });
  const results = await fetchHistoricData(symbol, fromInMilis, toInMilis);
  res.json({
    description: `Historic data endpoint for ${symbol}`,
    data: results,
  });
});

export const historicDataRouter = router;

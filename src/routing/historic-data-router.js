import { Router } from "express";
import { fetchHistoricData } from "../services/binance.js";
import { analyseData } from "../services/data-analyser.js";

const router = Router();

router.get("/historic-data", async (req, res) => {
  const { symbol, from, to } = req.query;
  const fromInMilis = new Date(from).getTime();
  const toInMilis = new Date(to).getTime();

  const results = await fetchHistoricData(symbol, fromInMilis, toInMilis);
  const analysedData = analyseData(results.data);
  res.json({
    description: `Historic data endpoint for ${symbol}`,
    priceChanges: analysedData,
  });
});

export const historicDataRouter = router;

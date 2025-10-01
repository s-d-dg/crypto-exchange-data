import axios from "axios";

const BASE_URL = "https://api.binance.com";

const INTERVAL = "1d";

export const fetchHistoricData = async (symbol, from, to) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/klines`, {
      params: {
        symbol,
        interval: INTERVAL,
        startTime: from,
        endTime: to,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching historic data from Binance:", error);
    return null;
  }
};

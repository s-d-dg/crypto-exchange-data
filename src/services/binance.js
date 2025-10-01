import axios from "axios";

const BASE_URL = "https://api.binance.com";

const INTERVAL = "1d";

export const fetchHistoricData = async (symbol, from, to) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/klines`, {
      params: {
        symbol,
        interval: INTERVAL,
      },
    });

    return response;
  } catch (error) {
    console.error("Error fetching historic data from Binance:", error);
    return null;
  }
};

export const avgPrice = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v3/avgPrice`, {
      params: {
        symbol,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching average price from Binance:", error);
    return null;
  }
};

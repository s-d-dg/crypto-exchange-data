import express from "express";
import { historicDataRouter } from "./routing/historic-data-router.js";

const app = express();
app.use(historicDataRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

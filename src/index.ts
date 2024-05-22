import express, { Express } from "express";
import cors from "cors";
import connectDB from "./config/database";
import { PORT } from "./secrets";
import routes from "./routes";
import { errorMidleware } from "./middlewares/errorMidleware";

const app: Express = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorMidleware);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import downloadRoutes from "./Routes/downloadRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", downloadRoutes.routes);

app.listen(8080, () => console.log("Started"));

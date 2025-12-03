import express from "express";
import api from "./routes/api.js";
import cors from "cors";
import database from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
 res.status(200).json({
   message: "OK",
 });
});
app.use("/api", api);

app.listen("3000", () => {
  database();
  console.log("App berjalan di : http://localhost:3000");
});

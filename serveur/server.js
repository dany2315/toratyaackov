import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from 'url';
import morgan from "morgan";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import gmailSend from "gmail-send";
import { Storage } from "@google-cloud/storage";


const ENV = process.env.ENV;
const URL_DATABASE_SCALINGO = process.env.SCALINGO_MONGO_URL;
const URL_DATABASE_DEV = process.env.URL_DATABASE;  //URL_DATABASE
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(ENV);


const app = express(); 


mongoose.set("strictQuery", false);
mongoose
  .connect(ENV === "dev" ? URL_DATABASE_DEV : URL_DATABASE_SCALINGO)
  .then(() =>{
    console.log(`connect to mongoDB: ${ENV}`)})
  .catch((error) =>
    console.log("probleme de connexion a mongoDB " + error.message)
  );


  app.set("trust proxy", true);
  app.use(bodyParser.json({ limit: "10000000mb" }));
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "build")));
  app.use(express.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.setHeader(
      "Strict-Transport-Security", 
      "max-age=31536000; includeSubDomains; preload"
    );
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Expires", "0");
    next();
  });

  
  app.use("/api", router);
  app.use("/", (req, res) => {
    console.log(req.hostname);
    res.send("welcome to the home page");
  });
  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${app.address().port()}`)
})
import express from "express";
import dotenv from "dotenv";
import router from "./routes/pages.js";
import cors from "cors";
import connection from "./database/connection.js";
import session from "express-session";
import passport from "passport";
import "./routes/passport.js";

dotenv.config();

const app = express();
app.enable('trust proxy')
app.use(
  cors({
    origin:
    process.env.NODE_ENV === "production"
    ? "https://news-paper-client.netlify.app"
    : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //     sameSite: 'none', 
    //     secure: true
    //   }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

const port = process.env.PORT || 5002;
console.log(process.env.MONGODB_URL)
connection(process.env.MONGODB_URL);
app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});

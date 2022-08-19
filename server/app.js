require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("uploads"));

mongoose.connect(process.env.DB_URI).then(() => console.log("Connected to the databese!")).catch((err) => console.log(err));

app.use('/api/post/', require('./routes/routes'));

app.listen(port, () => console.log(`server running at http://localhost:${port}`));
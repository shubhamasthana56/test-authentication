const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/user";
mongoose.connect(DB_URL, {useNewUrlParser: true});

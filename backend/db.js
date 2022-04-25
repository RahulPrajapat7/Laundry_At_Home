const mongoose = require("mongoose");
const mongoURI ="mongodb+srv://onlineLaundary:Bhole123@cluster0.og5g9.mongodb.net/onlinelaundry?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
};
module.exports = connectToMongo;

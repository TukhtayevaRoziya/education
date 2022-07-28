const mongoose = require('mongoose')
const connectDB = async () => {
    const conn = await mongoose.connect(
      "mongodb+srv://rahmiddinasiydinov:examthirdmonth@cluster0.gfy1v.mongodb.net/univer?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );   
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
module.exports = connectDB;
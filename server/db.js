const mongoose = require("mongoose");

// const mongoURL = "mongodb://localhost:27017/glocity";
// const mongoURL = "mongodb+srv://socket:socketglocity@cluster0.3kjta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoURL = "mongodb+srv://vivekbhore123pplco:finalyear9008@cluster0.ehzmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true});

const connection = mongoose.connection;

connection.on("error",()=>{
    console.log("some err occured while connecting to db"); 
})


connection.on("connected", () => {
  console.log("db connected successfully");
});

module.exports = mongoose;

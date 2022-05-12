const express = require("express");
const app = express();
const dbConfig = require("./db")

const authRoute = require("./routes/auth.js");

const postsRouter = require("./routes/posts");

//  app.use(express.json());
 app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.get("/",(req,res)=>{
  res.send("hello from backend (testroute)");
})

app.use("/api/users",authRoute);
app.use("/api/server/posts", postsRouter);



app.listen(5000,()=>{
    console.log("listening on 5000");
})
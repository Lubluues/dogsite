const express= require("express");
const path= require( "path");
const app =express()

app.use("/",
express.static(path.join(__dirname, "websites")))

app.get('/',(req,res)=>{
  
res.sendFile(path.join(__dirname,"websites","mywebsite.html"));
});
app.listen(3000)
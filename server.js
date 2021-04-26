const exp = require("express")
const app = exp();
const path=require("path")
require("dotenv").config()
app.use(exp.static(path.join(__dirname,"./dist/practice")));












app.listen(process.env.PORT||8080)
//app.listen(3400,()=>console.log("server is on ",3400));



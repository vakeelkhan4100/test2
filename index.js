import express from "express"
import router from "./routes/text.route.js";
import hostconnect from "./config/db.js";
const app = express();
app.use(express.json());
app.use(router)
hostconnect();
app.listen(2000,(req,res)=>{
    console.log("server is run on 2000 port");
    
})
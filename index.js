import express from "express"
import router from "./routes/text.route.js";
import hostconnect from "./config/db.js";
import { config } from "dotenv";
const app = express();
app.use(express.json());
app.use(router)
hostconnect();
config();
app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("server is run on 2000 port");
    
})

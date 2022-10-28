 import Jwt  from "jsonwebtoken"
export const authen =(req,res,next)=>{
   try{ if(!req.headers["authorization"]){
        res.send("token is not requered")
        return
    }
    const token =req.headers["authorization"].replace("Bearer ",'')
    const change = Jwt.verify(token,"khan")
    if(change){
        // res.send(" hi you are right")
        next()
    }
    else{
        res.send("token is not valid")
    }}catch(error) {
        res.status(401).send({
              status:false,
            msg:"internal error",
            data:{}
        }) 
    }

}
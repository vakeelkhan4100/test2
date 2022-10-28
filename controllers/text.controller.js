import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import user from "../moduls/text.mudul.js";
export const signup = async (req, res) => {
     try {
          const isemail = await user.findOne({ email: req.body.email })
          if (isemail) {
               res.send("email is alredy exits")
          }
          else {
               var pass = await bcrypt.hash(req.body.password, 10)
               req.body.password = pass
               const kuku = await user.create(req.body)
               kuku.token = Jwt.sign({ time: Date(), userId: kuku._id }, "khan")
               res.send({
                    status: true,
                    msg: "signup create succesfully",
                    data: kuku
               })
          }
     } catch (error) {
          res.status(500).send({
               status: false,
               msg: "internal error",
               data: error
          })
     }
}

export const login = async (req, res) => {
     try {
          let hello = await user.findOne({ email: req.body.email })
          if (hello) {
               let pass = await bcrypt.compare(req.body.password, hello.password)
               if (pass == true) {
                    hello.token = await Jwt.sign({ time: Date(), userId: hello._id }, "khan")
                    res.send({
                         status: true,
                         msg: "login successfully",
                         data: hello
                    })
               }
               else {
                    res.send({
                         status: false,
                         msg: "pass incorrect",
                         data: {}
                    })
               }
          }
     }
     catch (error) {
          res.status(500).send({
               status: false,
               msg: "internal error",
               data: error
          })
     }
}


export const update = async (req, res) => {
     try {
          const data = await user.findByIdAndUpdate({ _id: req.body.id }, req.body)
          if (data) {
               res.send({
                    status: true,
                    msg: "update succes",
                    data: data
               })
          }
          else {
               res.send({
                    status: false,
                    msg: "update  unsucces",
                    data: {}
               })
          }
     } catch (error) {
          res.send({
               status: false,
               msg: "internal error",
               data: error
          })
     }
}

export const apidelete =async(req,res)=>{
     try {
           const rata =await user.findOneAndDelete({_id:req.body.id})
           if(rata){
               res.send({
                    status:true,
                    msg:"deleted succes",
                    data:rata
               })
           }
           else{
               res.send({
                    status:false,
                    msg:"deleted unsucces",
                    data:{rata}
               })
           }
          
     } catch (error) {
          res.send({
               status: false,
               msg: "internal error",
               data: error
          })
     }

}




import mongoose from "mongoose"
const hostconnect = async () => {
    const conn = await mongoose.connect(" mongodb+srv://prod:UbpiFvFrOIIRpowd@pixel.rjqqvvg.mongodb.net/?retryWrites=true&w=majority/deshwali")
    console.log("host-----", conn.connection.host)
}
export default hostconnect;
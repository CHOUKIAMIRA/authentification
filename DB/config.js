const mongoose=require('mongoose')
const config = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/auth")
        console.log('database is connected')
    } catch (error) {
       console.log(error)
    }
}
module.exports=config
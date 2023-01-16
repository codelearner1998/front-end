const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/reactloginpracto")
.then(()=>{
    console.log("mongo Connected");
})
.catch(()=>{
    console.log("Failed");
})


const collectionShema = mongoose.Schema({
    email:{
        type : String ,
        required :true
    },
    password :{
        type :String ,
        required :true
    }
    

})

const Collection =   mongoose.model("Collection",collectionShema)

module.exports = Collection
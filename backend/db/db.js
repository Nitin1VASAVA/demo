const mongoose = require("mongoose")

const connectDB =()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/life")
        console.log("connected")
    } catch (error) {
        console.log("not connected")
    }
}

module.exports = connectDB
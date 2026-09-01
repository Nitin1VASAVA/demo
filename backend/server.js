const express = require("express");
const cors = require("cors")
const connectDB = require("./db/db")
const Users = require("./model/login")
const app = express();

app.use(express.json());
app.use(cors())
connectDB()
app.get("/",(req,res)=>{
    res.send("this is demo")
})

app.post("/login",(req,res)=>{
    try {
        const user = new Users({
            email:req.body.email,
            password:req.body.password
        })
        user.save()
        res.send("successfull")
    } catch (error) {
        console.log("error")
    }
})

app.get("/api/user", async (req, res) => {
    try {

        const demo = await Users.find();

        res.json(demo);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            message: "Server error"
        });

    }
});

app.listen(8080);
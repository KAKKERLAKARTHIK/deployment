let express=require("express")
let app=express()
app.use(express.json())



app.get("/get",(req,res)=>{

res.send("hello world")

})
app.listen(3002,()=>{
    console.log("server is running")
})
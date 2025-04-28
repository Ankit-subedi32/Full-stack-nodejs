require("./Database/connection")


let express = require("express")
let app = express()


app.get("/books",function(req,res){
    res.json({
        message : "books fetched succesfully"
    })
})


app.post("/books",function(req,res){
    res.json({
        message : "book added successfully"
    })
})

app.delete("/books:id",function(req,res){
    res.json({
        message : "book deleted successfully"
    })
})

app.delete("/books/:id",function(req,res){
    res.json({
        message : "book deleted successfully"
    })
})
app.patch("/books/:id",function(req,res){
    res.json({
        message : "book updated successfully"
    })
})
app.listen(3000, function(){
    console.log("server/backend/node project has started at port 3000")
})



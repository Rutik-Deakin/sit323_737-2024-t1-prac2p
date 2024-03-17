const express= require("express");
const app= express();
const addTwoNumber = (n1,n2) => {
    return n1+n2;
}

//GET method, to handle get request to server
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    //Handel invalid data
    if (!n1 || !n2) {
        return res.json({statuscocde:422, data: "Invalid data provided" }); 
    }
    //If we get valid data
    const result = addTwoNumber(n1,n2);
    return res.json({statuscocde:200, data: result }); 
});

console.log (addTwoNumber(19,12));

const port=3040;
//Server is listening on port "3040".
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})
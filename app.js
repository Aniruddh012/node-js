const express= require("express");
const app=express();
const port=80;
const cors = require('cors');
   // Enable CORS for all origins


   // Or, configure specific origins

   app.use(express.urlencoded({ extended: true }));
//   app.use(express.urlencoded({ extended: true }));
const path=require("path");    
//express specific stuff
app.use("/static",express.static("static")); // to searve the static file

// pug spesific stuff
app.set("view engine","pug"); // set the template engine as the pug
app.set("views",path.join(__dirname,"views")); // set the views directory

//end pointss
app.get('/',(req,res)=>{
    const param ={"title":'gym'}
    res.status(200).render('index.pug',param);
})

app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.status(200).render('index.pug');
    console.log("hii this is anirudh");
})

//start the server
app.listen(port,()=>{
    console.log("hii welcome to the new pug file ");
});


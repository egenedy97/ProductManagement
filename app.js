const express = require("express"),
      fileUpload = require("express-fileupload"),
      bodyparser =require("body-parser"),
      mysql = require("mysql"),
      path = require("path"),
      app = express() ,
      port = 3000;

      app.set("port" , process.env.port || port);
      
      app.set("views", __dirname+"/views");
      app.set("view engine" , "ejs");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(fileUpload());


const { mainPage } = require("./routes/index");
const {addProductPage} = require("./routes/product");
const {addProduct} = require("./routes/product");
app.get("/" , mainPage);
app.get("/add" , addProductPage) ;
app.post("/add" , addProduct) ;

const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"products"
    });

db.connect((err)=>{
    if(err)
    {
        throw err;
    }
    console.log ("Connection Succeeded")
});

global.db = db ; 

app.listen(port, ()=>{
    console.log('server is running on port : ' + port)
});
module.exports={
    mainPage:(req,res)=>{
        res.render("index.ejs",
        {
            data:"no data exists",
            title : "MainPage"
        }
        )
    }
};
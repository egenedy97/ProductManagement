module.exports={
    addProductPage:(req,res)=>{
        res.render("add_product.ejs",
        {
            message:"",
            title : "Add New Product | Products Management App"
        }
        )
    },
    addProduct:(req,res)=>{
        if(!req.files)
        {
            return res.status(400).send("No Product Image were Uploaded")
        }
    }
};
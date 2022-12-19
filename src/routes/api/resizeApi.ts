import resizeImage from "../../utilities/resize";
var appRoot = require('app-root-path');
import express from "express";
const  resize = express.Router();

let file_name: string ;
let file_width:number;
let file_height:number;

resize.get('/resize',async (req,res)=>{
    try {
        file_name= req.query.filename as string;
        file_width = parseInt(req.query.width  as string);
        file_height = parseInt(req.query.height as string);
        const location_path = appRoot.path + `/assets/res/${file_name}_${file_width}x${file_height}.jpg`;
        await resizeImage(file_name,file_width,file_height);
        res.sendFile(location_path);
    } catch (error) {
        res.send("<h2> image not found! </h2>"+
        " <br> <h3> make sure to put the image under assets/images folderRemembre the enpoind structre is"+
        " <br> resize?filename=yourImage&width=400&height=200</h3>")
       // console.log(error);
    }

});

export default resize;



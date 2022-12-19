import sharp from 'sharp';


async function resizeImage(file_name:string,width:number,height:number) {
    try {
        
      await sharp(`./assets/images/${file_name}.jpg`)
        .resize({
          width: width,
          height: height
        })
        .toFile(`./assets/res/${file_name}_${width}x${height}.jpg`);
    } catch (error) {
       throw new Error();
      // console.log(error);
    }
  }
  
 export default resizeImage;
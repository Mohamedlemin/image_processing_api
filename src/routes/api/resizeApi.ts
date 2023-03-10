import resizeImage from '../../utilities/resize'
import appRoot from 'app-root-path'
import express from 'express'
import fs from 'fs'
import check_parames from '../../middleware/check_parames'

const resize = express.Router()

let file_name: string
let file_width: number
let file_heigth: number

resize.get(
    '/resize',
    check_parames, // check if the width and heigth are positive integers and the existence of the image
    async (req: express.Request, res: express.Response): Promise<void> => {
        try {
            file_name = req.query.filename as string
            file_width = parseInt(req.query.width as string)
            file_heigth = parseInt(req.query.heigth as string)
            const location_path =
                appRoot.path +
                `/assets/res/${file_name}_${file_width}x${file_heigth}.jpg`
            // check if the resized image already exists
            if (fs.existsSync(location_path)) {
                // I now that I should display the picture without refreshing the page
                // by using a custom midleware and I tried many option but nothing works for me
                res.sendFile(location_path)
            } else {
                await resizeImage(file_name, file_width, file_heigth)
                res.sendFile(location_path)
            }
        } catch (error) {
            //   console.log(error);
        }
    }
)

export default resize

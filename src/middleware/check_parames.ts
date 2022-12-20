import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

let width: number
let heigth: number
let file_name: string

const check_parames = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    width = parseInt(req.query.width as string)
    heigth = parseInt(req.query.heigth as string)
    file_name = req.query.filename as string

    if (
        Number.isNaN(width) ||
        Number.isNaN(heigth) ||
        width < 0 ||
        heigth < 0
    ) {
        res.send('width or heigth value is not a positive integer').status(404)
        console.log('Invalid width or heigth')
    } else if (fs.existsSync(`./assets/images/${file_name}.jpg`)) {
        return next()
    } else {
        res.send(
            'Image not found make sur to put the image under assets/images folder'
        ).status(404)
        console.log('Image not found')
    }
}

export default check_parames

import express from 'express'
const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.send(
        '<h1> Welcome to the image processing Api </h1> ' +
            ' <br> <h2> To resize your image please </h2> <br>' +
            '<h3> 1 -put it under the assets/images folders <br>' +
            '2- visite use filename width and heigth like this <br>' +
            'api/resize?filename=palmtunnel&width=400&heigth=200'
    )
})

export default routes

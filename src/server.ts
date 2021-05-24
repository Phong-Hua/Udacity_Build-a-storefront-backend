import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const port : number = parseInt(process.env.PORT as unknown as string)

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    
    res.send('Hello World!')
})

app.listen(port, function () {
    console.log(`starting app on port ${port}`)
})

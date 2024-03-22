const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT | 3000
const host = process.env.HOST | '0.0.0.0'


const corsOptions = {
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.all('/*', (req, res) => {
    console.log({
        headers: req.headers,
        path: req.path,
        query: req.query,
        originalUrl: req.originalUrl,
        env: process.env,
    })

    res.status(200).send('success')
})

app.listen(port, host, () => {
    console.log(`Logserver app listening at http://${host}:${port}`)
})
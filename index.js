import express from 'express'
import cors from 'cors'
import { Worker } from 'worker_threads'
import fetch from 'node-fetch'

const app = express()
const port = process.env.PORT || 5000

app
    // middlewares
    .use(cors())
    // routes
    .get('/', (req, res) => {
        res.send('Welcome')
    })
    .get('/raid/:gamePin/:amount', (req, res) => {
        res.send({ status: 200 })

        try {
            let { gamePin, amount = 10 } = req.params
            gamePin = Number(gamePin)
            amount = Number(amount)

            const workerPath = './Bot.js'
            const thread = new Worker(workerPath)

            // 30min timeout
            const timeout = setTimeout(() => thread.terminate(), 1800000)

            thread.postMessage({ gamePin, amount })

            thread.once('message', () => thread.terminate())
            thread.on('error', err => console.error(err))
            thread.on('exit', () => {
                console.log('Thread is closed')
                clearTimeout(timeout)
            })
        } catch (err) {
            console.error(err)
        }
    })
    // start
    .listen(port, () => {
        console.log(`Server be startin on port ${port}`)
        setInterval(() => fetch('https://kahoot-kaboom.herokuapp.com/'), 600000)
    })

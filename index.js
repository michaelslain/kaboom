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
    .get('/raid/:gamePin', (req, res) => {
        res.send({ status: 200 })

        const botAmount = 100
        const workerPath = './Bot.js'
        const { gamePin } = req.params

        for (let i = 0; i < botAmount; i++) {
            try {
                const thread = new Worker(workerPath)

                const timeout = setTimeout(
                    () => thread.terminate(),
                    1800000 /* 30min */
                )

                thread.postMessage({ gamePin })

                thread.once('message', () => thread.terminate())
                thread.on('error', err => console.error(err))
                thread.on('exit', () => {
                    console.log('Thread is closed')
                    clearTimeout(timeout)
                })
            } catch (err) {
                console.error(err)
            }
        }
    })
    // start
    .listen(port, () => {
        console.log(`Server be startin on port ${port}`)
        setInterval(() => fetch('https://kahoot-kaboom.herokuapp.com/'), 600000)
    })

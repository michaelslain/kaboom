import { parentPort } from 'worker_threads'
import Kahoot from 'kahoot.js-updated'
import randomName from './names.js'

parentPort.on('message', async ({ gamePin }) => {
    try {
        const client = new Kahoot()
        await client.join(gamePin, randomName).catch(err => {
            if (err) parentPort.postMessage('bet')
        })
        console.log('Bot added')

        client.on('questionStart', question => {
            const answer = Math.floor(Math.random() * 4 + 1) - 1
            question.answer(answer)
        })
        client.on('quizEnd', () => {
            parentPort.postMessage('bet')
        })
    } catch (err) {
        parentPort.postMessage('bet')
    }
})

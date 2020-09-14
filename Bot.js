import { parentPort } from 'worker_threads'
import Kahoot from 'kahoot.js-updated'
import Name from './names.js'

parentPort.on('message', async ({ gamePin, amount }) => {
    class Bot {
        constructor({ id }) {
            this.id = id
            this.name = new Name()

            this.client = new Kahoot()

            this.join()

            this.client.on('questionStart', this.answer)
            this.client.on('quizEnd', this.onLeave)
        }

        join() {
            this.client.join(gamePin, this.name).catch(err => {
                if (err) parentPort.postMessage('bet')
            })
            console.log('Bot added')
        }

        answer(question) {
            const answer = Math.floor(Math.random() * 4 + 1) - 1
            question.answer(answer)
        }

        onLeave() {
            removeBot(this.id)
        }
    }

    const bots = new Array(amount).map((_, i) => {
        try {
            return new Bot({ id: i })
        } catch (err) {
            console.error(err)
        }
    })

    const removeBot = id => {
        bots = bots.filter(bot => bot.id !== id)
        if (bots.length < 0) parentPort.postMessage('bet')
    }
})

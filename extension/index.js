const input = document.querySelector('.pin')
const submit = document.querySelector('.submit')

submit.addEventListener('click', async () => {
    const pin = input.value

    fetch(`https://kahoot-kaboom.herokuapp.com/raid/${pin}`)
})

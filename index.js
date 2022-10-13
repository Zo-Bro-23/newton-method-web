const newtonMethod = require('newton-method')

document.getElementById('button').onclick = () => {
    if (!document.getElementById('text').value) {
        document.getElementById('result').innerHTML = 'Please enter a function!'
    } else {
        document.getElementById('result').innerHTML = `Result: ${newtonMethod(document.getElementById('text').value, 25, document.getElementById('initial').value || 0)}`
    }
}

document.getElementById('cleartext').onclick = () => {
    document.getElementById('result').innerHTML = ''
    document.getElementById('text').value = ''
}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        document.getElementById("button").click()
    }
})
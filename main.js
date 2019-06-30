function greeting() {
    console.log('hello world')
    const paragraph = document.querySelector('p')

    paragraph.innerHTML = 'Hello Mobile Web Specialist!'

}

// greeting()

const button = document.querySelector('#clickMe')

console.log(button)

button.addEventListener('click', greeting)


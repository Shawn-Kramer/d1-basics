// Create a button
const button = document.createElement('button')
button.textContent = 'CLICK ME!'
button.addEventListener('click', () => {
  alert('You clicked it! 🎉')
})
document.body.append(button)

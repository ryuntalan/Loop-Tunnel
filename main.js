const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menuButton = document.querySelector('.menuButton')
const menuClose = document.querySelector('.menuClose')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    menuButton.classList.toggle('invisible')
    menuClose.classList.toggle('visible')
    
})
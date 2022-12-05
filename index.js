// Dropdown function
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null)
    return
let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// Hamburger Menu Function
const menuButton = document.getElementById("menu-btn")
const exitButton = document.getElementById("exit-btn")
const nav = document.getElementById("nav")

menuButton.addEventListener('click', () => {
nav.classList.add('open-nav')
})

exitButton.addEventListener('click', () => {
nav.classList.remove('open-nav')
})
const burger = document.querySelector('.fas')
const navLInks = document.querySelector('.nav-links')
const links = document.querySelectorAll('#link-hover')

burger.addEventListener('click', () => {
  navLInks.classList.toggle('active')

  if (navLInks.classList.contains('active')) {
    burger.classList.replace('fa-hamburger', 'fa-drumstick-bite')
  } else {
    burger.classList.replace('fa-drumstick-bite', 'fa-hamburger')
  }
})

// when we click on the navlink it will show the main page, the menu will not stay on the
function showPage() {
  navLInks.classList.remove('active')
}

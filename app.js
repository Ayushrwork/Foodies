const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active')

  if (navLinks.classList.contains('nav-active')) {
    burger.classList.add('toogle')
  } else {
    burger.classList.remove('toogle')
  }
})

function showPage() {
  const navLinks = document.querySelector('.nav-links')
  navLinks.classList.remove('nav-active')
}

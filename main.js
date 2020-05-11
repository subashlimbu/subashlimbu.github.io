
const mainNav = document.getElementById('js-menu')
const navBarToggle = document.getElementById('js-navbar-toggle')

function toggleActive() {
  mainNav.toggleClass('active')
}

navBarToggle.addEventListener('click', toggleActive)


navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active')
})

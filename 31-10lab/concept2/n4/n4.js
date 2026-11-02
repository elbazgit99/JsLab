let btnColors = document.querySelectorAll('.color-btn')
let hoveredP = document.querySelector('p')
btnColors.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    hoveredP.textContent = btn.textContent
  })
})
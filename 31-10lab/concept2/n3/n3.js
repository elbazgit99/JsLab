let btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
  btn.addEventListener('click' , () => {
    btn.textContent = "i've got clicked"
  })
})

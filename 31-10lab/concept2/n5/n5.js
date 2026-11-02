let counter = document.querySelector('#counter')
let btn = document.querySelector('#increment')

btn.addEventListener('click' , () => {
  counter.textContent++
})
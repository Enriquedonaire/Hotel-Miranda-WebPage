
document.querySelector("div.btn__scroll_up").addEventListener('click', () => {
  setTimeout(() => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }, 200)

})

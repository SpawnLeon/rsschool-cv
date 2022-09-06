document.querySelector('.burger').addEventListener('click', (evt) => {
  evt.preventDefault();
  document.body.classList.toggle('show-menu')
})

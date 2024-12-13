const hb = document.querySelector('#hamburgerButton');
const cb = document.querySelector('#closeButton');
const nav = document.querySelector("#hamburgerNav")
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
  pw.classList.toggle('moveOver');
  hb.classList.toggle('open')
  cb.classList.toggle('open')
  nav.classList.toggle('open')
});

cb.addEventListener('click', () => {
  pw.classList.toggle('moveOver');
  hb.classList.toggle('open')
  cb.classList.toggle('open')
  nav.classList.toggle('open')
});

//inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();
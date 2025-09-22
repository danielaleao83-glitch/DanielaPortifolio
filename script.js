// Efeito de animação ao rolar a página
const elements = document.querySelectorAll('.animate-fadeUp');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('animate-fadeUp');
    }
  });
});

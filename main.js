const menuIcon = document.getElementById('menuIcon');
const drawer = document.getElementById('drawer');

// Abre a drawer ao clicar no ícone
menuIcon.addEventListener('click', () => {
  drawer.classList.toggle('open'); // Alterna a classe 'open'
});

// Fecha a drawer ao clicar fora dela
document.addEventListener('click', (event) => {
  const isClickInside = drawer.contains(event.target) || menuIcon.contains(event.target);

  // Se o clique não for dentro da drawer ou do ícone, fecha a drawer
  if (!isClickInside && drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  }
});
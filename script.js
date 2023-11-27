document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll('.menu-item');
  var contents = document.querySelectorAll('.content');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var contentId = item.getAttribute('data-content');
      var content = document.getElementById(contentId);

      // Verifica se o conteúdo está visível
      var isVisible = getComputedStyle(content).display !== 'none';

      // Oculta todos os conteúdos
      contents.forEach(function (otherContent) {
        otherContent.style.display = 'none';
      });

      // Exibe ou oculta o conteúdo clicado com base na visibilidade atual
      content.style.display = isVisible ? 'none' : 'block';
    });
  });
});

window.addEventListener("scroll", function() {
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 500)
})


// Obtenez l'élément de switcher
const switcher = document.getElementById('switcher');

// Appliquez le mode sombre si l'utilisateur a choisi ce mode précédemment
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  switcher.classList.add('is-active');
}

// Ajoutez un écouteur d'événement pour le clic sur le switcher
switcher.addEventListener('click', function () {
  this.classList.toggle('is-active');
  document.body.classList.toggle('dark-mode');

  // Enregistrez la préférence de l'utilisateur dans le stockage local
  if (this.classList.contains('is-active')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});

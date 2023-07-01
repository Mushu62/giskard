// Obtenez l'élément de switcher
const switcher = document.getElementById('switcher');

// Liste des classes d'éléments à basculer en mode sombre
const elementClasses = [
  'nav_component is-new',
  'nav_link',
  'heading-xlarge',
  'text-size-medium',
  'section-home-logos',
  'section-home-testimonials',
  'heading-huge text-weight-light',
  'testimonial_author_wrapper',
  'section-home-one is-new',
  'heading-medium text-color-black',
  'section_listing',
  'heading-large',
  'section-home-articles',
  'knowledge_top-content',
  'section-cta',
  'nav_logo',
  'footer_component',
  'slider_active_state',
  'section-home-testimonials',
  'section-home-header',
  'section-home-articles',
  'home-one_tabs_menu',
  'fs-sliderdots_content_new slider_active_state',
];

// Fonction pour basculer le mode sombre
function toggleDarkMode(isDark) {
  elementClasses.forEach(function (classGroup) {
    classGroup.split(' ').forEach(function (singleClass) {
      const elements = document.getElementsByClassName(singleClass);
      for (let i = 0; i < elements.length; i++) {
        if (isDark) {
          elements[i].classList.add('dark-mode');
        } else {
          elements[i].classList.remove('dark-mode');
        }
      }
    });
  });
}

// Appliquez le mode sombre si l'utilisateur a choisi ce mode précédemment
if (localStorage.getItem('darkMode') === 'true') {
  switcher.classList.add('is-active');
  toggleDarkMode(true);
}

// Ajoutez un écouteur d'événement pour le clic sur le switcher
switcher.addEventListener('click', function () {
  const isDark = this.classList.toggle('is-active');
  toggleDarkMode(isDark);

  // Enregistrez la préférence de l'utilisateur dans le stockage local
  localStorage.setItem('darkMode', isDark.toString());
});

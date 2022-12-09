import './style.css';

// Dropdown function (FOR DESKTOP MODE)

const arrowFeatures = document.getElementById('arrow-features');
const arrowCompany = document.getElementById('arrow-company');

document.addEventListener('click', (e) => {
  const isDropdownButtonFeatures = e.target.matches(
    '[data-dropdown-button-features]'
  );
  if (
    !isDropdownButtonFeatures &&
    e.target.closest('[data-dropdown-features]') != null
  )
    return;
  let currentDropdownFeatures;
  if (isDropdownButtonFeatures) {
    currentDropdownFeatures = e.target.closest('[data-dropdown-features]');
    currentDropdownFeatures.classList.toggle('active');
    arrowFeatures.classList.toggle('arrow-up');
  }

  const isDropdownButtonCompany = e.target.matches(
    '[data-dropdown-button-company]'
  );
  if (
    !isDropdownButtonCompany &&
    e.target.closest('[data-dropdown-company]') != null
  )
    return;
  let currentDropdownCompany;
  if (isDropdownButtonCompany) {
    currentDropdownCompany = e.target.closest('[data-dropdown-company]');
    currentDropdownCompany.classList.toggle('active');
    arrowCompany.classList.toggle('arrow-up');
  }

  document
    .querySelectorAll('[data-dropdown-features].active')
    .forEach((dropdown) => {
      if (dropdown === currentDropdownFeatures) return;
      dropdown.classList.remove('active');
      arrowFeatures.classList.toggle('arrow-up');
    });

  document
    .querySelectorAll('[data-dropdown-company].active')
    .forEach((dropdown) => {
      if (dropdown === currentDropdownCompany) return;
      dropdown.classList.remove('active');
      arrowCompany.classList.toggle('arrow-up');
    });
});

// Hamburger Menu Function
const menuButton = document.getElementById('menu-btn');
const exitButton = document.getElementById('exit-btn');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.add('open-nav');
});

exitButton.addEventListener('click', () => {
  nav.classList.remove('open-nav');
});

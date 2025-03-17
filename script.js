document.addEventListener('DOMContentLoaded', () => {

  // Hero Section Background Change
  const images = [
    'art.webp', 'forhero.webp', 'arty.webp', 'joy.webp', 
    'moreart.webp', 'sex.webp', 'arttherapy.webp', 'queerjoy.webp'
  ];
  let currentImageIndex = 0;
  const heroSection = document.querySelector('.hero');

  function changeHeroBackground() {
    if (!heroSection) return;

    const img = new Image();
    img.src = images[currentImageIndex];
    img.onload = () => {
      heroSection.style.background = `url(${img.src}) no-repeat center center/cover`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
    };
  }
  changeHeroBackground();
  setInterval(changeHeroBackground, 5000);

  // Smooth Scroll for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetElement = document.getElementById(link.getAttribute('href').substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Card Hover Scaling Effect
  document.querySelectorAll('.cards').forEach(card => {
    card.style.transition = 'transform 0.3s, box-shadow 0.3s';

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.15)';
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    });
  });

  const navLinks = document.querySelectorAll('.nav-links a');

  // Get the current page URL
  const currentPage = window.location.pathname;

  // Loop through each link and add the 'active' class to the matching link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Sidebar Menu
  document.querySelector('.sidebar-toggle')?.addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = 'flex';
  });

  document.querySelector('.sidebar-close')?.addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = 'none';
  });

  // Donate Button Click - Redirect to Payment
  document.querySelector('.donate')?.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = "payment.html";
  });

  // About Us Button Click - Redirect to About Page
  document.querySelector('.about-button')?.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = "about.html";
  });

  // Navbar Scroll Effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  });

  // Sponsor Section - Clone Logo Slides for Infinite Scroll Effect
  const logoSlides = document.querySelector(".logo-slides");
  if (logoSlides) {
    const clone = logoSlides.cloneNode(true);
    clone.classList.add("clone");
    document.querySelector(".logos").appendChild(clone);
  }
function redirectTo(url) {
  window.open(url, "_blank");
}
// Function to Set Favicon (Automatically Chooses Correct Format)
function updateFavicon() {
  const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "favicon.png";  // Use PNG by default
  document.head.appendChild(favicon);
}
updateFavicon();





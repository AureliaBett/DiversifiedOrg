function redirectTo(url) {
  window.open(url, "_blank");
 }
 
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

  const navLinks = document.querySelectorAll('.nav-links a, .sidebar a');

  // Get the current page URL
  const currentPage = window.location.pathname;

  // Loop through each link and update the active class
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active'); // Add active class to the current page link
    } else {
      link.classList.remove('active'); // Remove active class from other links
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

  // Navbar Scroll Effect with Thumbnail Resize
  function updateThumbnailSize() {
    const thumbnail = document.querySelector(".thumbnail1");
    if (thumbnail) {
        const isSmallScreen = window.innerWidth < 800;
        thumbnail.style.width = isSmallScreen ? "50px" : "100px";
        thumbnail.style.height = isSmallScreen ? "50px" : "100px";
    }
}

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const thumbnail = document.querySelector(".thumbnail1");

    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }

    if (thumbnail) {
        const isSmallScreen = window.innerWidth < 800;

        if (window.scrollY > 50) {
            thumbnail.style.width = isSmallScreen ? "50px" : "40px";
            thumbnail.style.height = isSmallScreen ? "50px" : "40px";
        } else {
            thumbnail.style.width = isSmallScreen ? "50px" : "100px";
            thumbnail.style.height = isSmallScreen ? "50px" : "100px";
        }
    }
});

// Ensure the correct size is applied on page load and window resize
window.addEventListener("load", updateThumbnailSize);
window.addEventListener("resize", updateThumbnailSize);



  // Sponsor Section - Clone Logo Slides for Infinite Scroll Effect
   const logoSlides = document.querySelector(".logo-slides");
  if (logoSlides) {
    const clone = logoSlides.cloneNode(true);
    clone.classList.add("clone");
    document.querySelector(".logos").appendChild(clone);
  }


// Function to Set Favicon (Automatically Chooses Correct Format)
function updateFavicon() {
  const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "favicon.png";  // Use PNG by default
  document.head.appendChild(favicon);
}
updateFavicon();

function scrollToAboutUs(event) {
  event.preventDefault(); // Prevent default link behavior
  const aboutSection = document.getElementById("aboutUs");
  if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Handle dropdown menu hover functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown, .dropdown1");

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => {
      const menu = dropdown.querySelector(".dropdown-menu, .menu-side");
      if (menu) {
        menu.style.display = "block";
        if (dropdown.classList.contains("dropdown1")) {
          const rect = dropdown.getBoundingClientRect();
          menu.style.position = "absolute";
          menu.style.top = `${rect.top}px`;
          menu.style.left = `${rect.right}px`;
        }
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      const menu = dropdown.querySelector(".dropdown-menu, .menu-side");
      if (menu) menu.style.display = "none";
    });
  });
});




  // Dynamically load the navigation bar
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
        // Reinitialize any event listeners or scripts related to the navbar
      })
      .catch(error => console.error('Error loading navbar:', error));
  }

  // Dynamically load the footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
        
      })
      .catch(error => console.error('Error loading footer:', error));
  }

  const copyPlaceholder = document.getElementById('copy-placeholder');

  if (copyPlaceholder) {
    fetch('copyright.html')
      .then(response => response.text())
      .then(data => {
        const currentYear = new Date().getFullYear();
        copyPlaceholder.innerHTML = data.replace('{{year}}', currentYear);
      })
      .catch(error => console.error('Error loading copyright:', error));
  }
   
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebarClose = document.querySelector('.sidebar-close');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', showSidebar);
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', hideSidebar);
  }

  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme');

  // Default to dark mode if no theme is saved
  const currentTheme = savedTheme || 'dark-mode';
  document.body.classList.add(currentTheme);
  themeIcon.className = currentTheme === 'dark-mode' ? 'fas fa-moon' : 'fas fa-sun';

  themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);

    // Update icon
    themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';

    // Save the selected theme to localStorage
    localStorage.setItem('theme', isDarkMode ? 'light-mode' : 'dark-mode');
  });
//social-media section
const mediaSlides = document.querySelector(".media-slides");

  if (mediaSlides) {
    const clone = mediaSlides.cloneNode(true);
    clone.classList.add("clone");
    document.querySelector(".carousel-container").appendChild(clone);
  }

  // Add event listener to scroll down button in the hero section
  const heroScrollButton = document.querySelector('.hero-scroll-button');
  if (heroScrollButton) {
    heroScrollButton.addEventListener('click', scrollToNextSection);
  }

  // Add event listener to scroll-to-top button
  const scrollToTopButton = document.querySelector('.scroll-to-top-button');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }

  // Show or hide the scroll-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton?.classList.add('visible');
    } else {
      scrollToTopButton?.classList.remove('visible');
    }
  });

});

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.add('open'); // Add the 'open' class to slide in
  }
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.remove('open'); // Remove the 'open' class to slide out
  }
}

function scrollToNextSection() {
  const nextSection = document.querySelector('.program'); // Select the next section
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}



import projects from "./projects.js";

function portfolioProjects() {
  const projectsGrid = document.getElementById("PortfolioProjects");
  if (!projectsGrid) return;

  const eachProject = projects.map(
    (project) => `
    <article class="project-card">
      <header class="project-card-header">
        <div class="project-card-top">
          <i class="ph ph-folder project-folder"></i>
          <div class="project-card-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="ph ph-github-logo"></i>
            </a>
            ${
              project.live && project.live !== "#"
                ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <i class="ph ph-arrow-square-out"></i>
                  </a>`
                : ""
            }
          </div>
        </div>
        <h3 class="project-card-title">
          <a href="${project.live !== "#" ? project.live : project.github}" target="_blank" rel="noopener noreferrer">
            ${project.name}
          </a>
        </h3>
        <p class="project-card-description">${project.description}</p>
      </header>
      <footer class="project-card-footer">
        <ul class="project-card-tech">
          ${project.tools.map((tool) => `<li>${tool}</li>`).join("")}
        </ul>
      </footer>
    </article>
  `
  );

  projectsGrid.innerHTML = eachProject.join("");
}

// Mobile nav toggle
function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navResume = document.querySelector(".nav-resume");

  if (!navToggle) return;

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  if (navResume) {
    navResume.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}

// Smooth scroll offset for fixed header
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  portfolioProjects();
  initMobileNav();
  initSmoothScroll();
});


// Add scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  document.querySelectorAll('.featured-project').forEach((project, index) => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(40px)';
    project.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(project);
  });

  document.querySelectorAll('.experience-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
  });
}

// Update DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  portfolioProjects();
  initMobileNav();
  initSmoothScroll();
  initScrollAnimations();
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav");
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("active") && 
        !nav.contains(e.target) && 
        !menuBtn.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
  
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      updateThemeIcon(savedTheme);
    } else if (!systemPrefersDark) {
      document.documentElement.setAttribute("data-theme", "light");
      updateThemeIcon("light");
    }
    
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
  
  function updateThemeIcon(theme) {
    const themeToggle = document.querySelector(".theme-toggle i");
    if (themeToggle) {
      if (theme === "light") {
        themeToggle.className = "fa-solid fa-moon";
      } else {
        themeToggle.className = "fa-solid fa-sun";
      }
    }
  }
});
const coursesBtn = document.querySelector(".show_courses_btn");
if (coursesBtn) {
  const coursesList = document.querySelector(".courses_list");
  
  coursesBtn.addEventListener("click", () => {
    coursesList.style.display = coursesList.style.display === "block" ? "none" : "block";
    coursesBtn.textContent = coursesList.style.display === "block" ? "Hide Courses" : "Show Courses";
  });
}
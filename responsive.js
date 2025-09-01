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
});
const coursesBtn = document.querySelector(".show_courses_btn");
if (coursesBtn) {
  const coursesList = document.querySelector(".courses_list");
  
  coursesBtn.addEventListener("click", () => {
    coursesList.style.display = coursesList.style.display === "block" ? "none" : "block";
    coursesBtn.textContent = coursesList.style.display === "block" ? "Hide Courses" : "Show Courses";
  });
}

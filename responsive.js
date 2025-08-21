 document.addEventListener("DOMContentLoaded", () => {
        const menuBtn = document.querySelector(".menu-btn");
        const nav = document.querySelector("nav");

        menuBtn.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      });
      
      const coursesBtn = document.querySelector(".show_courses_btn");
      const coursesList = document.querySelector(".courses_list");

      coursesBtn.addEventListener("click", () => {
        coursesList.style.display = coursesList.style.display === "block" ? "none" : "block";
        coursesBtn.textContent = coursesList.style.display === "block" ? "Hide Courses" : "Show Courses";
      });
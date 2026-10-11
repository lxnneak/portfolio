const educationBtn = document.getElementById("education-btn");
const workExperienceBtn = document.getElementById("work-experience-btn");
const educationSection = document.getElementById("education");
const workExperienceSection = document.getElementById("work-experience");

const header = document.querySelector("header");

function activateTab(activeBtn, inactiveBtn, activeSection, inactiveSection) {
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");

  activeBtn.setAttribute("aria-pressed", "true");
  inactiveBtn.setAttribute("aria-pressed", "false");

  activeSection.classList.add("active");
  inactiveSection.classList.remove("active");
  activeSection.hidden = false;
  inactiveSection.hidden = true;
}

educationBtn.addEventListener("click", () => {
  activateTab(
    educationBtn,
    workExperienceBtn,
    educationSection,
    workExperienceSection,
  );
});

workExperienceBtn.addEventListener("click", () => {
  activateTab(
    workExperienceBtn,
    educationBtn,
    workExperienceSection,
    educationSection,
  );
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const educationBtn = document.getElementById("education-btn");
const workExperienceBtn = document.getElementById("work-experience-btn");
const educationSection = document.getElementById("education");
const workExperienceSection = document.getElementById("work-experience");

function activateTab(activeBtn, inactiveBtn, activeSection, inactiveSection) {
  // Toggle CSS active class
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");

  // Toggle ARIA pressed state
  activeBtn.setAttribute("aria-pressed", "true");
  inactiveBtn.setAttribute("aria-pressed", "false");

  // Toggle visible section
  activeSection.classList.add("active");
  inactiveSection.classList.remove("active");
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

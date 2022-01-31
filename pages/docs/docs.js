const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

const updateSection = (id) => {
  Array.from(mainContent.children).forEach((section) => {
    const sectionID = section.getAttribute('data-id');
    if (sectionID === id) {
      section.classList.remove('hide-content');
      section.scrollIntoView(true);
    } else {
      section.classList.add('hide-content');
    }
  });
};

const updateSidebar = (selectedOption) => {
  Array.from(sidebar.children[0].children).forEach((option) => {
    if (option.innerHTML === selectedOption) {
      option.classList.add('sidebar-option-active');
    } else {
      option.classList.remove('sidebar-option-active');
    }
  });
};

updateSection('Installation');
updateSidebar('Installation');

sidebar.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('sidebar-option')) {
    updateSection(target.innerHTML);
    updateSidebar(target.innerHTML);
  }
});

function openHomeDropdown() {
    const options = document.getElementsByClassName("home-custom-select-options")[0];
    options.classList.toggle("home-show");
  }
  
  function closeHomeDropdown() {
    const options = document.getElementsByClassName("home-custom-select-options")[0];
    options.classList.remove("home-show");
  }
  
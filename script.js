function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.classList.contains("scale-100")) {
    dropdown.classList.remove("scale-100", "opacity-100");
    dropdown.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      dropdown.classList.add("hidden");
    }, 300); // Match the duration of the transition
  } else {
    dropdown.classList.remove("hidden");
    setTimeout(() => {
      dropdown.classList.remove("scale-95", "opacity-0");
      dropdown.classList.add("scale-100", "opacity-100");
    }, 10); // Small delay to ensure the transition occurs
  }
}

// Close the dropdown if the user clicks outside
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.classList.contains("scale-100")) {
      dropdown.classList.remove("scale-100", "opacity-100");
      dropdown.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        dropdown.classList.add("hidden");
      }, 300); // Match the duration of the transition
    }
  }
};
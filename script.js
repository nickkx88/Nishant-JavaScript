function orderNow() {
    alert("Thank you for choosing Feasto! Redirecting to the order page...");
  }
  function orderItem(itemName) {
    alert(`You have selected ${itemName}! Redirecting to the order page...`);
  }
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.href;
  
    navLinks.forEach(link => {
      if (link.href === currentPage) {
        link.classList.add("active");
      }
    });
  });
  
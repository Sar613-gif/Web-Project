
  var links = document.querySelectorAll(".nav-links a");
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });


function submitForm() {
  var name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  var email = document.getElementById("email").value;
  if (email === "") {
    alert("Please enter your email.");
    return;
  }
   var message = document.getElementById("message").value;
  if (message === "") {
    alert("Please enter a message.");
    return;
  }
  var subject = document.getElementById("subject").value;
  if (subject === "") {
    alert("Please select a subject.");
    return;
  }
  alert("Thank you, " + name + "! Your message has been sent. We'll get back to you soon ☕");
  document.getElementById("contactForm").reset();
}

function filterMenu(category) {
  var cards = document.querySelectorAll(".menu-card");
  var buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(function (btn) {
    btn.classList.remove("active-filter");
  });

  event.target.classList.add("active-filter");

  cards.forEach(function (card) {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

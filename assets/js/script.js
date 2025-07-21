document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      console.log(`Navigasi ke bagian '${link.textContent}' berhasil diklik!`);
      navLinks.forEach((nav) => nav.classList.remove("active"));
      event.currentTarget.classList.add("active");
    });
  });

  const registrationForm = document.querySelector(".registration-form");
  const registrationSuccessMessage = document.getElementById(
    "registration-success-message"
  );

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    registrationForm.style.display = "none";
    registrationSuccessMessage.style.display = "block";
    registrationSuccessMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

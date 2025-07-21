// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  // --- Fungsionalitas Navigasi ---
  const navLinks = document.querySelectorAll("nav a");

  // Tambahkan event listener untuk setiap link navigasi
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Mencegah perilaku default link (navigasi langsung) jika perlu
      // event.preventDefault();

      // Opsional: Memberi tahu di console bahwa link telah diklik
      console.log(`Navigasi ke bagian '${link.textContent}' berhasil diklik!`);

      // Hapus kelas 'active' dari semua link
      navLinks.forEach((nav) => nav.classList.remove("active"));

      // Tambahkan kelas 'active' ke link yang baru saja diklik
      event.currentTarget.classList.add("active");

      // Untuk smooth scroll, pastikan HTML memiliki `scroll-behavior: smooth;`
      // pada elemen `html` atau `body` seperti yang sudah ada di CSS Anda.
    });
  });

  // --- Fungsionalitas Form Registrasi ---
  const registrationForm = document.querySelector(".registration-form");
  const registrationSuccessMessage = document.getElementById(
    "registration-success-message"
  );

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah halaman refresh saat form disubmit

    // Dalam aplikasi nyata, di sini Anda akan mengirim data form ke server
    // Contoh: fetch('/api/register', { method: 'POST', body: new FormData(registrationForm) })
    // .then(response => response.json())
    // .then(data => { /* handle response */ });

    // Untuk contoh ini, kita akan langsung menampilkan pesan sukses:
    registrationForm.style.display = "none"; // Sembunyikan form
    registrationSuccessMessage.style.display = "block"; // Tampilkan pesan sukses

    // Opsional: Scroll ke pesan sukses agar terlihat jelas oleh pengguna
    registrationSuccessMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Opsional: Mengosongkan form setelah submit jika form tidak disembunyikan
    // registrationForm.reset();
  });
});

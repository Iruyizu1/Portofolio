  // Ambil elemen modal dan container untuk game
var modal = document.getElementById("myModal1");
var gameContainer = document.getElementById("gameContainer");

// Ambil link yang membuka modal
var openGameModal = document.getElementById("openGameModal");

// Untuk membuka modal dan menampilkan game di dalamnya
openGameModal.onclick = function() {
  modal.style.display = "block"; // Tampilkan modal
  // Sisipkan game embed di dalam modal
  gameContainer.innerHTML = '<script src="https://cdn.htmlgames.com/embed.js?game=Illustrations3&bgcolor=white"></script>';
};

// Ambil elemen <span> untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika tombol close diklik, sembunyikan modal dan hapus game embed
span.onclick = function() {
  modal.style.display = "none"; // Sembunyikan modal
  gameContainer.innerHTML = ''; // Hapus game agar tidak tetap berjalan setelah modal ditutup
};

// Jika pengguna mengklik di luar modal, tutup modal
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    gameContainer.innerHTML = ''; // Hapus game jika modal ditutup
  }
};
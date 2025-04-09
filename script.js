// Ambil elemen modal dan gambar
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Ambil semua gambar dengan class "modalImage"
var images = document.querySelectorAll(".modalImage");

// Untuk setiap gambar, tambahkan event listener
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";  // Tampilkan modal
    modalImg.src = this.src;       // Set gambar modal sesuai gambar yang diklik
    captionText.innerHTML = this.alt;  // Set caption sesuai "alt" gambar
  };
});

// Ambil elemen <span> untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika tombol close diklik, sembunyikan modal
span.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(event) {
    // Cek jika yang diklik adalah bagian luar gambar, bukan gambar itu sendiri
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
document.getElementById("formPendaftaran").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nama && email) {
    alert(`Terima kasih telah mendaftar, ${nama}!`);
    this.reset();
  } else {
    alert("Mohon isi semua kolom dengan benar.");
  }
});
// Fungsi untuk menampilkan/menghilangkan input alamat berdasarkan pilihan pengambilan obat
function toggleAlamatInput() {
  const pengambilan = document.getElementById("pengambilan").value;
  const alamatDiv = document.getElementById("alamatDiv");

  if (pengambilan === "antar") {
    alamatDiv.style.display = "block"; // Tampilkan input alamat
  } else {
    alamatDiv.style.display = "none"; // Sembunyikan input alamat
  }
}

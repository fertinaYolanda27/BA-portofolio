/*
 * File JavaScript untuk Portofolio Fertina Yolanda
 *
 * Saat ini masih kosong.
 *
 */

console.log("Portofolio script loaded.");

document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen modal, gambar di dalam modal, dan tombol close
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModalBtn = document.querySelector(".close-modal");

    // Ambil SEMUA gambar di halaman
    const images = document.querySelectorAll("img");

    // Looping ke setiap gambar dan beri event listener klik
    images.forEach(function(img) {
        img.addEventListener("click", function() {
            // Abaikan jika yang diklik adalah gambar hero/profil (opsional, hapus if ini jika foto profil mau bisa diklik juga)
            if (this.classList.contains("hero-img") || this.classList.contains("experience-logo")) {
                return; 
            }

            // Set src gambar modal dengan src gambar yang sedang diklik
            modalImg.src = this.src;
            
            // Tampilkan modal dengan menambahkan class 'show' (men-trigger CSS display flex dan mengubah display none bawaan)
            modal.style.display = "flex"; 
            // Sedikit delay agar transisi CSS berjalan mulus
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
        });
    });

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.classList.remove("show");
        // Tunggu animasi CSS selesai baru sembunyikan display-nya
        setTimeout(() => {
            modal.style.display = "none";
            modalImg.src = ""; // Bersihkan src
        }, 300);
    }

    // Tutup jika klik tombol X
    closeModalBtn.addEventListener("click", closeModal);

    // Tutup jika klik area hitam (overlay) di luar gambar
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Tutup jika menekan tombol 'Escape' di keyboard
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
});

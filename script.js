let selectedGame = "hardware";

const cards = document.querySelectorAll(".card");
const startBtn = document.querySelector(".primary");
const guideBtn = document.querySelector(".secondary");

// === PILIH GAME ===
cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    selectedGame = card.dataset.game;
  });
});

// === MULAI GAME ===
startBtn.addEventListener("click", () => {
  if (selectedGame === "hardware") {
    window.location.href = "Hardwere.html";
  } else {
    window.location.href = "Fungsi.html";
  }
});

// === PETUNJUK ===
guideBtn.addEventListener("click", () => {
  showGuide();
});

function showGuide() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content">
      <h2>Petunjuk</h2>
      <p>
        Pilih jenis game terlebih dahulu.<br><br>
        Cocokkan jawaban dengan benar.<br><br>
        Jawaban benar = skor bertambah!
      </p>
      <button onclick="this.parentElement.parentElement.remove()">Tutup</button>
    </div>
  `;

  document.body.appendChild(modal);
}
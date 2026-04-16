let selectedLeft = null;
let pasangan = [];

// DATA
const dataHardware = [
  { nama: "Keyboard", img: "img/Keyboard.png" },
  { nama: "Monitor", img: "img/Monitor.png" },
  { nama: "Mouse", img: "img/Mouse.png" }
];

const dataFungsi = [
  { nama: "Keyboard", fungsi: "Alat input" },
  { nama: "Monitor", fungsi: "Menampilkan output" },
  { nama: "Mouse", fungsi: "Alat penunjuk" }
];

// PILIH DATA
const data = (mode === "hardware") ? dataHardware : dataFungsi;

// SHUFFLE
const shuffled = [...data].sort(() => Math.random() - 0.5);

// LOAD GAME
window.onload = () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  data.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "item";
    div.dataset.id = index;

    if (mode === "hardware") {
      div.innerHTML = `<img src="${item.img}">`;
    } else {
      div.innerText = item.nama;
    }

    div.onclick = () => selectLeft(div);
    left.appendChild(div);
  });

  shuffled.forEach((item, index) => {
    let div = document.createElement("div");
    div.className = "item";
    div.dataset.id = data.findIndex(d => d.nama === item.nama);

    if (mode === "hardware") {
      div.innerText = item.nama;
    } else {
      div.innerText = item.fungsi;
    }

    div.onclick = () => selectRight(div);
    right.appendChild(div);
  });
};

// PILIH
function selectLeft(el) {
  document.querySelectorAll("#left .item").forEach(i => i.classList.remove("selected"));
  el.classList.add("selected");
  selectedLeft = el;
}

function selectRight(el) {
  if (!selectedLeft) return;

  pasangan.push({
    left: selectedLeft,
    right: el
  });

  selectedLeft.classList.add("pair" + pasangan.length);
  el.classList.add("pair" + pasangan.length);

  selectedLeft.classList.remove("selected");
  selectedLeft = null;
}

// CEK
function checkJawaban() {
  let score = 0;

  pasangan.forEach(p => {
    if (p.left.dataset.id === p.right.dataset.id) {
      p.left.classList.add("correct");
      p.right.classList.add("correct");
      score++;
    } else {
      p.left.classList.add("wrong");
      p.right.classList.add("wrong");
    }
  });

  document.getElementById("score").innerText =
    "Skor: " + score + " / " + data.length;
}
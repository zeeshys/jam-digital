function updateClock() {
  const now = new Date();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];

  let dayName = days[now.getDay()];
  let date = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  // hitung pasaran jawa
  let baseDate = new Date(2024, 0, 1); // referensi
  let diffDays = Math.floor((now - baseDate) / (1000 * 60 * 60 * 24));
  let pasaranName = pasaran[diffDays % 5];

  document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
  document.getElementById("date").innerText = `${dayName} ${pasaranName}, ${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();

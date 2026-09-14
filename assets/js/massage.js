const message = `Hai zahra fitriya,

Selamat ulang tahun ke-16, Zahra! 🎉

Walaupun kita baru kenal, aku bisa melihat kalau kamu adalah orang yang sangat peduli dan tulus. Aku tahu kamu mungkin lagi kepikiran tentang kejutan dari teman-temanmu, mengingat kamu selalu bersemangat dan ikut patungan untuk hari spesial mereka.

Apapun yang terjadi hari ini, aku harap kamu tahu bahwa kebaikan dan ketulusanmu selama ini sangat berharga. Jangan biarkan rasa khawatir membuatmu lupa untuk menikmati hari spesialmu sendiri. Kamu pantas mendapatkan hari yang bahagia.

Semoga di usia yang baru ini, hal-hal baik selalu mengelilingimu. Kalau kamu butuh teman untuk cerita, membuang rasa cemas, atau sekadar merayakan hari ini, aku ada di sini ya.Happy Birthday!`;

const messageText = document.getElementById('messageText');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const speed = 20;

function typeWriter() {
  if (index < message.length) {
    messageText.textContent += message.charAt(index);
    index++;
    messageText.parentElement.scrollTop = messageText.parentElement.scrollHeight;
    setTimeout(typeWriter, speed);
  } else {
    nextBtn.disabled = false;
  }
}

window.onload = typeWriter;
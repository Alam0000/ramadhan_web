function giveTHR() {
    alert("Tapi BOONG");
    alert("ettt Maaf Maaf Semoga sehat selalu dan dimurahkan rizkinya")
}

function sendTHR(){
    alert("Kirim THR nya lewat Dana ");
    alert("NO: 085715321297")
}

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

var text = "Hallo Saya Mengucapkan";
var typingText = document.querySelector('.typing-text');

function typeWriter(text, i) {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i);
        }, 50); // Penundaan dalam milidetik antara setiap huruf
    }
}

// Memanggil fungsi dengan teks dan indeks awal
typeWriter(text, 0);

const musicIcon = document.querySelector('.toggle-music');
const audio = document.querySelector('.musik');

musicIcon.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});


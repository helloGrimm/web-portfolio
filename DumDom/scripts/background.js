// Ścieżka do folderu z obrazami
const imageFolder = "images/background/";

// Lista nazw plików obrazów (możesz to dynamicznie generować po stronie serwera, jeśli to konieczne)
const images = ["Chainsaw_man_1.png", "hunter_x_hunter_1.png", "Kaguya_sama_Love_Is_War_1.png", "Kakegurui_1.png", "Neon_Genesis_Evangelion_4.png", "One_Piece_1.png"]; 

// Pobierz element obrazu
const backgroundImage = document.getElementById("background");

// Ustaw początkowy indeks
let currentIndex = 0;

// Funkcja zmieniająca obraz
function changeBackground() {
    // Zmień źródło obrazu
    backgroundImage.src = imageFolder + images[currentIndex];

    // Przejdź do następnego obrazu (z resetem do początku)
    currentIndex = (currentIndex + 1) % images.length;
}

// Zmieniaj obraz co 5 sekund
setInterval(changeBackground, 3000);

// Ustaw pierwszy obraz na start
changeBackground();
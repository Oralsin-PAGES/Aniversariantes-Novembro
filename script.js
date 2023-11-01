document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.png",
        "03-11.jpeg",
        "05-11.jpeg",
        "06-11.jpeg",
        "09-11.jpeg",
        "11-11.jpeg",
        "20-11_SIQ.jpeg",
        "20-11.jpeg",
        "22-11.jpeg",
        "24-11.jpeg",
        "25-11.jpeg",
        "26-11.jpeg",
        "28-11.jpeg",
        "29-11_SIQ.jpeg",
        "29-11.jpeg",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});

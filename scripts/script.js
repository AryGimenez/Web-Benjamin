document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const images = document.querySelectorAll('.project .image-container img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
        AOS.refresh(); // Refresca AOS para aplicar la animación
    }

    setInterval(showNextImage, 5000); // Cambia la imagen cada 5 segundos
});
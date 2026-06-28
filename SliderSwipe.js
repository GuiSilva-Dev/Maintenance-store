// Script para adicionar funcionalidade de drag/swipe nos sliders

document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider, sliderIndex) => {
        const slidesContainer = slider.querySelector('.slides-skills');
        const slides = slider.querySelectorAll('.slide-skills');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');

        let currentSlide = 0;
        let startX = 0;
        let endX = 0;
        let isDragging = false;

        // Função para mostrar slide específico
        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            const translateValue = -currentSlide * 100;
            slidesContainer.style.transform = `translateX(${translateValue}%)`;
        }

        // Event listeners dos botões
        prevBtn?.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextBtn?.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        // Mouse events
        slidesContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            endX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;

            const difference = startX - endX;
            const threshold = 50; // Mínimo de pixels para considerar como deslize

            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    // Deslizou para a esquerda (próxima imagem)
                    showSlide(currentSlide + 1);
                } else {
                    // Deslizou para a direita (imagem anterior)
                    showSlide(currentSlide - 1);
                }
            }
        });

        // Touch events para mobile
        slidesContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
        });

        slidesContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            endX = e.touches[0].clientX;
        });

        slidesContainer.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;

            const difference = startX - endX;
            const threshold = 30; // Mínimo de pixels para considerar como swipe

            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    // Swipe para a esquerda (próxima imagem)
                    showSlide(currentSlide + 1);
                } else {
                    // Swipe para a direita (imagem anterior)
                    showSlide(currentSlide - 1);
                }
            }
        });
    });
});

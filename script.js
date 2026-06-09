document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.weather-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0; // Default focused card (Tamil Nadu)

    function updateCarousel() {
        cards.forEach((card, i) => {
            // Remove all existing tracking layout structural states
            card.classList.remove('active', 'prev', 'next', 'hidden');
            
            if (i === currentIndex) {
                card.classList.add('active');
            } else if (i === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add('prev');
            } else if (i === (currentIndex + 1) % cards.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Next Button Functionality
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    // Previous Button Functionality
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    // Make side cards clickable to jump straight into focus directly
    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            if (currentIndex !== i) {
                currentIndex = i;
                updateCarousel();
            }
        });
    });

    // Initialize layout assignment setup on first boot loading frame
    updateCarousel();
});
        //*REMOVE TAG DE URL #INICIO
        window.addEventListener("hashchange", function () {
            window.history.replaceState(null, null, window.location.pathname + window.location.search);
        })
        if (window.location.hash) {
            window.history.replaceState(null, null, window.location.pathname + window.location.search);
        }

        // *cards de serviços começam centralizados e se deslocam para os lados ao rolar
        document.addEventListener("DOMContentLoaded", function () {
            const serviceCards = Array.from(document.querySelectorAll('.card-servicos-left, .card-servicos'));

            const updateCardPositions = () => {
                const centerY = window.innerHeight / 2;
                serviceCards.forEach((card, index) => {
                    const rect = card.getBoundingClientRect();
                    const cardCenter = rect.top + rect.height / 2;
                    const distance = cardCenter - centerY;
                    const maxDistance = window.innerHeight / 2;
                    const normalized = Math.max(-1, Math.min(1, distance / maxDistance));
                    const direction = index % 2 === 0 ? -1 : 1;
                    const shift = direction * normalized * 80;
                    card.style.transform = `translateX(${shift}px)`;
                });
            };

            window.addEventListener('scroll', updateCardPositions, { passive: true });
            window.addEventListener('resize', updateCardPositions);
            updateCardPositions();
        });
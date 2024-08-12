document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const onScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
});

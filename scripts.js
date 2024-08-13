document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const sections = document.querySelectorAll('section');

    hamburger.addEventListener('click', function () {
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
        hamburger.classList.toggle('active');
    });

    const links = sidebar.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            sections.forEach(section => {
                section.classList.remove('visible');
            });

            setTimeout(() => {
                targetSection.classList.add('visible');
            }, 300);
        });
    });
});

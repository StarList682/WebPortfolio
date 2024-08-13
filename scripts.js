document.getElementById("hamburger").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
};

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

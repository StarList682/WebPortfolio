// JavaScript for toggling the sidebar menu
document.getElementById("hamburger").onclick = function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
};

// JavaScript for adding 'visible' class when sections are in view
window.onscroll = function() {
    var sections = document.querySelectorAll("section");
    var scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(function(section) {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add("visible");
        }
    });
};

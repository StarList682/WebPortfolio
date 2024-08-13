function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    }
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('visible');
    });

    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('visible');
}

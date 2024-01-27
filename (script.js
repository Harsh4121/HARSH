document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById('Education').style.display = 'block'; // Display 'About' section initially

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            const targetSectionId = this.getAttribute('data-target');
            
            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(targetSectionId).style.display = 'block';
        });
    });
});

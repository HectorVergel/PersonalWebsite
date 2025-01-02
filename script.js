document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const navButtons = document.querySelectorAll('.nav-buttons button');

    aboutBtn.addEventListener('click', function() {
        setActiveSection('about');
    });

    projectsBtn.addEventListener('click', function() {
        setActiveSection('projects');
    });

    function setActiveSection(section) {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
        
        // Show selected section and add active class to the button
        if(section === 'about') {
            aboutSection.classList.add('active');
            aboutBtn.classList.add('active');
        } else if(section === 'projects') {
            projectsSection.classList.add('active');
            projectsBtn.classList.add('active');
        }
    }

    // Initialize with About Me section active
    setActiveSection('projects');
});

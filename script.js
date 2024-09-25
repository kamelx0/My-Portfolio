// Object to store personal data
const personalInfo = {
    name: "Kamel Bahaa Esawy",
    github: "https://github.com/Kim6-9",
    email: "kamel.uwk21@gmail.com",
    linkedin: "https://eg.linkedin.com/in/kamel-l-6b2513292"
};

// Function to display personal data on the page
function displayPersonalInfo() {
    const infoSection = document.getElementById('personal-info');
    
    const nameElement = document.createElement('p');
    nameElement.innerHTML = "<span>Name:</span> " + personalInfo.name;
    
    const githubElement = document.createElement('p');
    githubElement.innerHTML = `<span>GitHub:</span> <a href="${personalInfo.github}" target="_blank">${personalInfo.github}</a>`;
    
    const emailElement = document.createElement('p');
    emailElement.innerHTML = `<span>Email:</span> <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>`;
    
    const linkedinElement = document.createElement('p');
    linkedinElement.innerHTML = `<span>LinkedIn:</span> <a href="${personalInfo.linkedin}" target="_blank">${personalInfo.linkedin}</a>`;

    // Append personal info to the section
    infoSection.appendChild(nameElement);
    infoSection.appendChild(githubElement);
    infoSection.appendChild(emailElement);
    infoSection.appendChild(linkedinElement);
}

// Show alert when the page loads
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Famous Landmarks in Egyptian Cities!");
    displayPersonalInfo(); // Call the function to display personal data
});

// Smooth scroll to sections when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Image hover effect to display landmark description
document.querySelectorAll('ul li img').forEach(img => {
    img.addEventListener('mouseover', function() {
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = "Click to learn more!";
        description.style.position = 'absolute';
        description.style.background = 'rgba(0, 0, 0, 0.7)';
        description.style.color = '#fff';
        description.style.padding = '10px';
        description.style.borderRadius = '5px';
        description.style.top = `${img.offsetTop}px`;
        description.style.left = `${img.offsetLeft}px`;
        img.parentNode.appendChild(description);
    });

    img.addEventListener('mouseout', function() {
        const description = img.parentNode.querySelector('.description');
        if (description) {
            description.remove();
        }
    });
});

// Toggle visibility of personal info section
document.getElementById('personal-info').addEventListener('click', function() {
    this.classList.toggle('hidden');
});

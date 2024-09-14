// Personal data stored in an object
const personalInfo = {
    name: "Kamel Bahaa Esawy",
    github: "https://github.com/kamelx0",
    email: "kamel.uwk21@gmail.com",
    linkedin: "https://eg.linkedin.com/in/kamel-l-6b2513292"
};

// Function to display personal data on the page
function displayPersonalInfo() {
    const infoSection = document.getElementById('personal-info');
    
    const nameElement = document.createElement('p');
    nameElement.textContent = "Name: " + personalInfo.name;
    
    const githubElement = document.createElement('p');
    githubElement.innerHTML = `GitHub: <a href="${personalInfo.github}" target="_blank">${personalInfo.github}</a>`;
    
    const emailElement = document.createElement('p');
    emailElement.innerHTML = `Email: <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>`;
    
    const linkedinElement = document.createElement('p');
    linkedinElement.innerHTML = `LinkedIn: <a href="${personalInfo.linkedin}" target="_blank">${personalInfo.linkedin}</a>`;

    // Append the data to the section in HTML
    infoSection.appendChild(nameElement);
    infoSection.appendChild(githubElement);
    infoSection.appendChild(emailElement);
    infoSection.appendChild(linkedinElement);
}

// Call the function to display the info when the page loads
window.onload = function() {
    displayPersonalInfo();
};

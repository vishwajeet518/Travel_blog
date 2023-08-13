// JavaScript code for interactive map integration (example using Leaflet.js)

// Create a map instance
const map = L.map('map-container').setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Add markers for destinations
const destinations = [
    { name: 'Destination 1', lat: 51.505, lng: -0.09 },
    { name: 'Destination 2', lat: 51.51, lng: -0.1 },
    // Add more destinations
];

destinations.forEach(destination => {
    const marker = L.marker([destination.lat, destination.lng]).addTo(map);
    marker.bindPopup(destination.name);
});


// JavaScript code for gallery lightbox integration

// Add event listeners to gallery images
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Open a lightbox or modal to display the full-size image
        const fullImageUrl = image.src;
        // Implement your own logic to show the full-size image
    });
});


// JavaScript code for contact form submission

// Select the contact form element
const contactForm = document.getElementById('contact-form');

// Add an event listener to submit the form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form input values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Perform form validation
    if (name === '' || email=== '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Perform form submission (you can use AJAX or fetch to send the form data to a server)

    // Reset form fields after submission
    contactForm.reset();
});
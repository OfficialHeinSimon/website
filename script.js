// Handle form submission for the subscribe form
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const email = e.target.email.value;
    alert(`Thank you for subscribing, ${email}!`);
    e.target.reset(); // Reset the form after submission
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const username = e.target.username.value;
    const password = e.target.password.value;
    // In a real scenario, you'd validate the credentials here
    alert(`Logged in as ${username}`);
    e.target.reset(); // Reset the form after submission
});

// RSVP button click event
const rsvpButtons = document.querySelectorAll('.rsvp-btn');
rsvpButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for your RSVP!');
    });
});

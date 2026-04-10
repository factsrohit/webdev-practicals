const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const phone = document.getElementById("tel").value.trim();

    msg.textContent = '';

    let isValid = true;

    // Email validation
    if (email == '') {
        msg.textContent += `Enter valid email 
        `;
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        msg.textContent += `Password must be at least 6 characters
        `;
        isValid = false;
    }

    // Phone validation
    if (phone.length != 10) {
        msg.textContent += `Enter valid 10-digit number
        `;
        isValid = false;
    }

    // Final success
    if (isValid) {
        msg.textContent = "Form submitted successfully!";
    }
});
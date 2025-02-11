document.addEventListener('DOMContentLoaded', (event) => {




    // Modal and Form Elements
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");





    // Opening and Closing the Modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }





    // Form Submission and Validation
    form.onsubmit = function (event) {
        event.preventDefault();
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const phoneRegex = /^\+94\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;
        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }
        if (!address) {
            document.getElementById('addressError').textContent = 'Address is required';
            isValid = false;
        }

        if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').textContent = 'Phone number must start with +94 and be followed by exactly 9 digits';
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            isValid = false;
        }
        if (message.length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
            isValid = false;
        }

        if (isValid) {
            const contactData = {
                name: name,
                address: address,
                phone: phone,
                email: email,
                message: message
            };


            localStorage.setItem('contactData', JSON.stringify(contactData));

            alert('Your message has been sent successfully!');

            modal.style.display = "none";


            form.reset();

        }
    }
});





// Function to hide the button
function hideButton() {
    const buttonToHide = document.getElementById('myButton');
    buttonToHide.style.display = 'none';

}


// button
document.getElementById("contactBtn").addEventListener("click", function () {
    this.style.display = "none";
});





document.getElementById('hideButton').addEventListener('click', hideButton);




function openPopup() {
    document.getElementById("signup-modal").style.display = "flex";
}


function closePopup() {
    document.getElementById("signup-modal").style.display = "none";
}


document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let reEmail = document.getElementById("re-email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (firstName === "" || lastName === "" || email === "" || reEmail === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    if (email !== reEmail) {
        errorMessage.textContent = "Emails do not match!";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters!";
        return;
    }

    errorMessage.style.color = "green";
    errorMessage.textContent = "Sign-up successful!";
    
    setTimeout(() => {
        closePopup(); 
    }, 2000);
});

function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessage = document.getElementById("errorMessage");

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return false;
  }

  // Simple email validation (more robust validation can be done)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Invalid email address!";
    return false;
  }

  // Additional validation checks can be added here

  // If all checks pass, form submission is allowed
  errorMessage.textContent = "";
  alert("Sign Up Successful!");
  return true;
}

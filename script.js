
// Part 1: Event Handling


// Click event example
const messageBtn = document.getElementById("messageBtn");
const messageArea = document.getElementById("messageArea");

messageBtn.addEventListener("click", () => {
  messageArea.textContent = "🎉 Button clicked! JavaScript is working.";
});


// Part 2: Interactive Elements


// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggleModeBtn");

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "Switch to Light Mode";
  } else {
    toggleModeBtn.textContent = "Switch to Dark Mode";
  }
});

// Counter Game
let counter = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterValue = document.getElementById("counterValue");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});


// Part 3: Form Validation


const signupForm = document.getElementById("signupForm");
const formFeedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic validations
  if (name === "") {
    formFeedback.textContent = "⚠️ Name cannot be empty.";
    formFeedback.style.color = "red";
    return;
  }

  // Email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formFeedback.textContent = "⚠️ Please enter a valid email.";
    formFeedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formFeedback.textContent = "⚠️ Password must be at least 6 characters long.";
    formFeedback.style.color = "red";
    return;
  }

  // Success
  formFeedback.textContent = "✅ Form submitted successfully!";
  formFeedback.style.color = "green";
});

import {
  validateDescription,
  validateAmount,
  validateDate,
  validateCategory,
  checkDuplicateWords
} from "./validators.js";

const form = document.getElementById("transactionForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value.trim();

  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Description
  if (!validateDescription(description)) {
    document.getElementById("descError").textContent = "Description cannot be empty or start/end with space.";
    valid = false;
  } else if (checkDuplicateWords(description)) {
    document.getElementById("descError").textContent = "Description contains duplicate words.";
    valid = false;
  }

  // Amount
  if (!validateAmount(amount)) {
    document.getElementById("amountError").textContent = "Enter a valid amount (e.g. 15.50).";
    valid = false;
  }

  // Category
  if (!validateCategory(category)) {
    document.getElementById("categoryError").textContent = "Category should only contain letters and spaces.";
    valid = false;
  }

  // Date
  if (!validateDate(date)) {
    document.getElementById("dateError").textContent = "Enter a valid date in YYYY-MM-DD format.";
    valid = false;
  }

  if (valid) {
    alert("✅ Transaction added successfully!");
    form.reset();
  }
});

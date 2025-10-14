import {
  validateDescription,
  validateAmount,
  validateDate,
  validateCategory,
  checkDuplicateWords
} from "./validators.js";
import { addTransaction } from "./storage.js";

const form = document.getElementById("transactionForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value.trim();

  let valid = true;
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!validateDescription(description) || checkDuplicateWords(description)) {
    document.getElementById("descError").textContent = "Invalid description.";
    valid = false;
  }

  if (!validateAmount(amount)) {
    document.getElementById("amountError").textContent = "Invalid amount.";
    valid = false;
  }

  if (!validateCategory(category)) {
    document.getElementById("categoryError").textContent = "Invalid category.";
    valid = false;
  }

  if (!validateDate(date)) {
    document.getElementById("dateError").textContent = "Invalid date format.";
    valid = false;
  }

  if (valid) {
    const transaction = {
      description,
      amount: parseFloat(amount),
      category,
      date,
    };

    addTransaction(transaction);
    alert("✅ Transaction added successfully!");
    form.reset();
  }
});

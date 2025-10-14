import { getTransactions, deleteTransaction, editTransaction, saveTransactions } from "./storage.js";

const tableBody = document.querySelector("#transactionTable tbody");
const sortSelect = document.getElementById("sortBy");

// Load and render
renderTable();

sortSelect.addEventListener("change", renderTable);

function renderTable() {
  const transactions = getTransactions();
  const sortBy = sortSelect.value;

  // Sort based on selected option
  transactions.sort((a, b) => {
    if (sortBy === "date") return new Date(b.date) - new Date(a.date);
    if (sortBy === "description") return a.description.localeCompare(b.description);
    if (sortBy === "amount") return b.amount - a.amount;
  });

  tableBody.innerHTML = "";

  transactions.forEach((t, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><input type="date" value="${t.date}" data-field="date" data-index="${index}" /></td>
      <td><input type="text" value="${t.description}" data-field="description" data-index="${index}" /></td>
      <td><input type="number" value="${t.amount}" data-field="amount" data-index="${index}" /></td>
      <td><input type="text" value="${t.category}" data-field="category" data-index="${index}" /></td>
      <td>
        <button class="deleteBtn" data-index="${index}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Deleting
  document.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      deleteTransaction(index);
      renderTable();
    });
  });

  // Inline editing
  document.querySelectorAll("input[data-field]").forEach(input => {
    input.addEventListener("change", e => {
      const index = e.target.dataset.index;
      const field = e.target.dataset.field;
      const value = e.target.value;

      editTransaction(index, { [field]: value });
      renderTable();
    });
  });
}

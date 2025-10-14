// Local Storage helper functions

const STORAGE_KEY = "transactionsData";

// Load transactions from localStorage
export function getTransactions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Save transactions to localStorage
export function saveTransactions(transactions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

// Add new transaction
export function addTransaction(transaction) {
  const transactions = getTransactions();
  transactions.push(transaction);
  saveTransactions(transactions);
}

// Delete by index
export function deleteTransaction(index) {
  const transactions = getTransactions();
  transactions.splice(index, 1);
  saveTransactions(transactions);
}

// Edit a transaction
export function editTransaction(index, updatedData) {
  const transactions = getTransactions();
  transactions[index] = { ...transactions[index], ...updatedData };
  saveTransactions(transactions);
}

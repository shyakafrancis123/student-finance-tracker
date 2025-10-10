// Basic validation patterns

export function validateDescription(text) {
  return /^\S(?:.*\S)?$/.test(text); // no leading/trailing spaces, not empty
}

export function validateAmount(num) {
  return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(num); // valid number with up to 2 decimals
}

export function validateDate(date) {
  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date); // YYYY-MM-DD
}

export function validateCategory(tag) {
  return /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(tag); // letters only, spaces allowed
}

// Advanced: detect duplicate consecutive words
export function checkDuplicateWords(text) {
  return /\b(\w+)\s+\1\b/i.test(text);
}

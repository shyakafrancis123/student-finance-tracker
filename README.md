# Student finance tracker 

hey! this is my Student Finance Tracker that i built cause i needed to keep track of where my money goes (its always dissapearing lol). its basically helping me see where im spending too much n making better decisions wit my budget.

## where to find it/ deployment 

github pages link/ check it out here: https://shyakafrancis123.github.io/student-finance-tracker/
quick demo vid: https://youtu.be/wh9FA0Qh7Ms

i went with a WhatsApp-style green theme coz everyone knows how that looks + its pretty easy on the eyes. got them nice rounded buttons n stuff that makes it look clean.

## quick overview of wat it does

its basically a small app that works offline n helps me:

- add my spendings n edit em when i make mistakes
- search thru everything (even got some fancy regex patterns if ur into that)
- see where all my money went with some cool charts n stuff
- check how much i spent this week/month + set limits so i dont go crazy
- save/load my data as JSON (had to google what that was lol)

everything stays on my computer in localStorage (kinda like cookies but better?) unless i export it myself.

## Wireframes & UI Structure

Here's how I organized the key screens:

### Dashboard (index.html)
```
+------------------+
:    Header        :
:  [Theme Toggle]  :
+------------------+
:  Stats Cards     :
: $Total | Weekly  :
: Budget | 7-Days  :
+------------------+
:  Charts         :
: [Line: 30 days] :
: [Doughnut: Cat] :
+------------------+
:  Quick Actions  :
: [Add] [Records] :
+------------------+
```

### Records View
```
+------------------+
| Search & Filter  |
|  [Regex Search] |
|  [Sort Options] |
+------------------+
| Records Table   |
| Date  | Desc    |
| Cat   | Amount  |
| [Edit][Delete]  |
+------------------+
```

### Add/Edit Form
```
+------------------+
| Transaction Form |
|  Description    |
|  Amount         |
|  Category       |
|  Date           |
| [Save][Cancel]  |
+------------------+
```

NB the website uses like the actual UI uses WhatsApp-inspired green theming, rounded corners, and subtle shadows for depth.

## Features

- Transaction CRUD (Create / Read / Update / Delete)
- Regex-powered search and advanced find tools
- Running-total line chart (last 30 days by default)
- Category breakdown (doughnut chart)
- Budget tracking with progress bar and over-budget warning
- Responsive UI (mobile-first) with a compact header and mobile menu
- Light + dark theme toggle
- Import / Export JSON for backups
- Simple validation with helpful error messages

---

## Regex catalog (patterns + examples)

These are the exact patterns the app uses (pulled from `scripts/validators.js`) and quick examples for how to use them.

- description: `/^\\S(?:.*\\S)?$/`
    - Purpose: Ensure no leading or trailing whitespace and that the description isn't empty.
    - Example valid: `"Lunch at café"`
    - Example invalid: `" Leading space"`, `"Trailing space "`

- amount: `/^(0*[1-9]\\d*(\\.\\d{1,2})?|0+\\.([1-9]\\d?|0[1-9]))$/`
    - Purpose: Positive monetary amounts with up to 2 decimal places.
    - Example valid: `"10"`, `"10.50"`, `"0.01"`
    - Example invalid: `"0"`, `"-5"`, `"10.123"`

- date: `/^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/`
    - Purpose: Enforce `YYYY-MM-DD` format.
    - Example valid: `"2025-09-25"`
    - Example invalid: `"09/25/2025"`, `"2025-13-01"`

- category: `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/`
    - Purpose: Category names with letters, spaces, and hyphens only.
    - Example valid: `"Food"`, `"Books and Supplies"`, `"Health-Care"`
    - Example invalid: `"Food123"`, `"Food & Drinks"`

- duplicateWords: `/\\b(\\w+)\\s+\\1\\b/gi`
    - Purpose: Detect duplicate consecutive words in a description.
    - Example: `"coffee coffee"` → flagged

- emailPattern: `/\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b/g`
    - Purpose: Rough email detection (used in advanced search).
    - Example: `"me@example.com"`

- phonePattern: `/\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b/g`
    - Purpose: Find common US-style phone numbers in notes.
    - Example: `"123-456-7890"`, `"1234567890"`

- currency: `/\\$\\d+\\.?\\d*/g`
    - Purpose: Locate dollar amounts in free text.
    - Example: `"$10.50"`

- percentage: `/\\d+\\.?\\d*%/g`
    - Purpose: Find percentages like discounts.
.  - Example: `"12.5%"`

- strongPassword: `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/`
    - Purpose: Password policy for potential future settings / import protection.
    - Example: `"S3cure!Pass"`

NB: these patterns validate common formats and help avoid user errors while staying performant in the browser.


## Keyboard map (what I use while testing)

These are the common keyboard interactions supported by the app.

- Tab: Move focus forward through inputs, buttons, and links
- Shift + Tab: Move focus backward
- Enter: Activate focused button / submit focused form
- Esc: Close modal or cancel an edit
- Arrow keys (in lists): navigate between items (where applicable)
- / (slash): focus the search input (where implemented)

NB::: The app tries to provide visible focus outlines so you can see where keyboard focus is. like its highlighted so that one follows it easily.

---

## Accessibility notes

I care about making this usable for everyone. below is what i did to make it possible 

- Semantic HTML: app uses `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` for clear structure.
- Labels: all inputs have `<label for=\"...\">` connected to the field `id`.
- Keyboard: full keyboard navigation for common flows; modals trap focus while open.
- Focus states: visible outlines and focus styles using `:focus` for buttons and inputs.
- Live regions: important dynamic updates (like "Transaction saved" or "Budget exceeded") use `aria-live` for screen reader announcements.
- Contrast: the light theme uses a strong contrast palette and the dark theme switches to high-contrast surfaces.
- Form validation: inline error messages are provided and announced to screen readers.

## how to run it locally (the quick way)

ok so theres 2 ways to run it:

1. the proper way (if u got Node.js):
```powershell
# go to where u downloaded it
npx http-server -c-1 -p 8080
# then go to http://localhost:8080 in ur browser
```

2. the lazy way:
just double-click `index.html` n it should work... mostly. but like, the charts might be weird coz of how the JS modules work. tbh i just use the github pages link most times coz its easier lol.

---

## Running tests (what I run when I validate changes)

The project uses simple in-app test pages / manual test cases. For automated validation I use the validation helpers inside `scripts/validators.js`.

Quick manual test checklist:

- Open the console and run the validator test cases from `ValidationManager.getTestCases()` to confirm patterns:

```javascript
// Paste into browser console while the app is loaded
import { ValidationManager } from './scripts/validators.js';
const v = new ValidationManager();
console.log(v.getTestCases());
```

- Test regex search: try the search box with patterns like `"coffee|lunch"` or `"^Gas"`.
- Test date logic: add transactions with dates near today and check the 7-day total in the dashboard.
- Verify charts: the running total line should change when you add transactions for recent dates.

If you want a small automated node test harness later I can add a `tests/` folder with a few Jest tests that import `validators.js`.

## files n stuff (if ur curious)

heres the main files i mess with:

- `index.html` - the main page obvs
- `styles/main.css` + `responsive.css` - makes it look good n work on phones
- `scripts/main.js` - where all the important stuff happens
- `scripts/state.js` - keeps track of whats happening
- `scripts/storage.js` - saves ur stuff in the browser
- `scripts/validators.js` - makes sure u dont put weird data in
- `seed.json` - some fake data to test with



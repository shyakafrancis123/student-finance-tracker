                 
                 **************************** APP SUMMARY ******************************
Project name:   STUDENT FINANCE TRACKER
It's Purpose:   This has been built to help us students record and monitor  daily expenses, visualize spending trends, and stay within budget.

THE CORE FEATURES:
- Add, edit, delete transactions
- Sort and search using regex
- See total spending and category stats
- Store data locally (localStorage)
- Import/export data in JSON
- The Manual currency conversion
- Finally the Responsive design for mobile and desktop

                    *************************** FOLDER PREPARATION **********************
This is the folder organisation i used .
student-finance-tracker/
│
├── index.html
├── about.html
├── dashboard.html
├── records.html
├── form.html
├── settings.html
│
├── styles/
│   ├── main.css
│   └── responsive.css
│
├── scripts/
│   ├── storage.js
│   ├── state.js
│   ├── ui.js
│   ├── validators.js
│   └── search.js
│
├── assets/
│   └── (images/icons)
│
├── tests.html
├── seed.json
└── README.md


                *************************** THE GENERAL DATA MODEL ****************************
Each transaction record will look like the sample given below:
                    "id": "txn_001",
                    "description": "Lunch at cafeteria",
                    "amount": 12.50,
                    "category": "Food",
                    "date": "2025-09-25",
                    "createdAt": "2025-09-25T10:15:00Z",
                    "updatedAt": "2025-09-25T10:15:00Z"
- id → This is the unique transaction identifier
- description → This is the short text of the transaction
- amount → This is the amount of money which is up to two decimals
- category → This will house one of the folllowing categories for example Food, Books, Transport among others
- date → This will use the YYYY-MM-DD format
- createdAt / updatedAt → These are mainly timestamps for tracking

                ********************* WIREFRAME BRIEF SUMMARY *********************
The Dashboard
- This will show total amount, top category, and 7-day chart
- It will also link to Add Transaction and View Records

The Records Page
- It will have a Table of transactions with Edit/Delete buttons
- It will also have a Regex search bar and sort options

The Add/Edit Form
- It will have Fields ike  Description, Amount, Category, Date among others
- It will also have the Save and Cancel buttons

The Settings            
- Currency options and budget cap input

The About Page
- It will talk about the App purpose and my contact info

               *********************** Accessibility Plan ************************
- I will use semantic HTML elements like the `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` for like a clear structure
- Every input field also has a `<label>` linked to it using the `for` and `id` attributes
- Ensure visible focus states using the `:focus` selector so users can see which element is active
- Use `aria-live` regions for dynamic updates like “Budget exceeded!” or “Transaction saved.”
- There is support for full keyboard navigation using keys like the :
                                        * **Tab** that moves between links, buttons, and inputs
                                        * **Enter** activates or submit actions
- There is a Maintainance for a strong color contrast between text and background for readability and accessibility


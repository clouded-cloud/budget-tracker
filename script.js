<<<<<<< HEAD


// Selecting Elements
const totalAmount = document.getElementById("total-amount");
const userAmount = document.getElementById("user-amount");
const productTitle = document.getElementById("product-title");
const addIncomeBtn = document.getElementById("total-amount-button");
const addExpenseBtn = document.getElementById("add-expenses");
const balanceList = document.querySelector("#user-balance-table ul");
const expensesTableBody = document.querySelector("#expenses-table tbody");

// State
let income = 0;
let expenses = 0;
let balance = 0;

// Update UI
function updateBalanceUI() {
    balanceList.innerHTML = `
        <li>Total Income: ksh${income}</li>
        <li>Total Expenses: ksh${expenses}</li>
        <li>Balance: ksh${income - expenses}</li>
    `;
}

// Add Income
addIncomeBtn.addEventListener("click", () => {
    const value = parseFloat(totalAmount.value);
    if (!isNaN(value) && value > 0) {
        income += value;
        totalAmount.value = "";
        updateBalanceUI();
    } else {
        alert("Enter a valid income amount.");
    }
});

// Add Expense
addExpenseBtn.addEventListener("click", () => {
    const title = productTitle.value.trim();
    const cost = parseFloat(userAmount.value);

    if (title && !isNaN(cost) && cost > 0) {
        expenses += cost;
        const row = expensesTableBody.insertRow();
        row.innerHTML = `<td>${title}</td><td>ksh${cost.toFixed(2)}</td>`;
             

        productTitle.value = "";
        userAmount.value = "";
        updateBalanceUI();
    } else {
        alert("Enter valid product title and amount.");
    }
});

// Initialize UI
updateBalanceUI();
=======


// Selecting Elements
const totalAmount = document.getElementById("total-amount");
const userAmount = document.getElementById("user-amount");
const productTitle = document.getElementById("product-title");
const addIncomeBtn = document.getElementById("total-amount-button");
const addExpenseBtn = document.getElementById("add-expenses");
const balanceList = document.querySelector("#user-balance-table ul");
const expensesTableBody = document.querySelector("#expenses-table tbody");

// State
let income = 0;
let expenses = 0;
let balance = 0;

// Update UI
function updateBalanceUI() {
    balanceList.innerHTML = `
        <li>Total Income: ksh${income}</li>
        <li>Total Expenses: ksh${expenses}</li>
        <li>Balance: ksh${income - expenses}</li>
    `;
}

// Add Income
addIncomeBtn.addEventListener("click", () => {
    const value = parseFloat(totalAmount.value);
    if (!isNaN(value) && value > 0) {
        income += value;
        totalAmount.value = "";
        updateBalanceUI();
    } else {
        alert("Enter a valid income amount.");
    }
});

// Add Expense
addExpenseBtn.addEventListener("click", () => {
    const title = productTitle.value.trim();
    const cost = parseFloat(userAmount.value);

    if (title && !isNaN(cost) && cost > 0) {
        expenses += cost;
        const row = expensesTableBody.insertRow();
        row.innerHTML = `<td>${title}</td><td>ksh${cost.toFixed(2)}</td>`;
        productTitle.value = "";
        userAmount.value = "";
        updateBalanceUI();
    } else {
        alert("Enter valid product title and amount.");
    }
});

// Initialize UI
updateBalanceUI();
>>>>>>> afccb4b6853d9f6cf544729ce521f82fac3a792c

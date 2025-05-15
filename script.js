


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

function updateBalanceDisplay() {
    const balance = totalIncome - totalExpenses;
    balanceTable.innerHTML = `
        <li>Total Income: $${totalIncome.toFixed(2)}</li>
        <li>Total Expenses: $${totalExpenses.toFixed(2)}</li>
        <li>Balance: $${balance.toFixed(2)}</li>
    `;
}


// Add income
totalAmountButton.addEventListener("click", () => {
    const income = parseFloat(totalAmountInput.value);
    if (!isNaN(income) && income > 0) {
        totalIncome += income;
        updateBalanceDisplay();
        totalAmountInput.value = "";
    } else {
        alert("Please enter a valid income amount.");
    }
});



// Add expense
addExpensesButton.addEventListener("click", () => {
    const title = productTitleInput.value.trim();
    const amount = parseFloat(userAmountInput.value);

    if (!title || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid product title and amount.");
        return;
    }

    // Add to total expenses
    totalExpenses += amount;
    updateBalanceDisplay();

    // Create new expense row
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${title}</td>
        <td>$${amount.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Add delete functionality
    row.querySelector(".delete-btn").addEventListener("click", () => {
        totalExpenses -= amount;
        updateBalanceDisplay();
        row.remove();
    });

    expensesTableBody.appendChild(row);

    // Clear inputs
    productTitleInput.value = "";
    userAmountInput.value = "";
});

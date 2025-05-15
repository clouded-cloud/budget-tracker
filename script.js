


// Selecting Elements

const totalAmountInput = document.getElementById("total-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitleInput = document.getElementById("product-title");
const userAmountInput = document.getElementById("user-amount");
const addExpensesButton = document.getElementById("add-expenses");
const balanceTable = document.getElementById("user-balance-table").querySelector("ul");
const expensesTableBody = document.querySelector("#expenses-table tbody");

// State
let totalIncome = 0;
let totalExpenses = 0;

function updateBalanceDisplay() {
    const balance = totalIncome - totalExpenses;
    balanceTable.innerHTML = `
        <li>Total Income: ksh${totalIncome.toFixed(2)}</li>
        <li>Total Expenses: ksh${totalExpenses.toFixed(2)}</li>
        <li>Balance: ksh${balance.toFixed(2)}</li>
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

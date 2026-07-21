let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let total = 0;

displayExpenses();

function addExpense() {

    let expenseName = document.getElementById("expenseName").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (expenseName === "" || amount === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }

    expenses.push({
        name: expenseName,
        amount: Number(amount),
        category: category,
        date: date
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";

    displayExpenses();
}

function displayExpenses() {

    let expenseList = document.getElementById("expenseList");
    let search = document.getElementById("search").value.toLowerCase();

    expenseList.innerHTML = "";

    total = 0;

    expenses.forEach((expense, index) => {

        if (expense.name.toLowerCase().includes(search)) {

            let li = document.createElement("li");

            li.innerHTML = `
            <b>${expense.name}</b><br>
            Category: ${expense.category}<br>
            Amount: ₹${expense.amount}<br>
            Date: ${expense.date}<br>
            <button onclick="deleteExpense(${index})">Delete</button>
            <hr>
            `;

            expenseList.appendChild(li);

            total += expense.amount;
        }

    });

    document.getElementById("total").innerHTML = total;
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

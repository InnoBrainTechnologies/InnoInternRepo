const transactions = [
    { date: '2023-08-15', type: 'Deposit', amount: 4000 },
    { date: '2023-08-17', type: 'Withdrawal', amount: -1000},
    { date: '2023-08-19', type: 'Deposit', amount: 2000 }
];

const transactionsList = document.querySelector('.transactions');

transactions.forEach(transaction => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span class="date">${transaction.date}</span> ${transaction.type}: ₹${transaction.amount}`;
    transactionsList.appendChild(listItem);
});

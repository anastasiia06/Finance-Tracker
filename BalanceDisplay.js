import React from "react";

const BalanceDisplay = ({ salary, expenses }) => {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const remainingBalance = salary - totalExpenses;

    return (
        <div>
            <h2>Balance: ${remainingBalance.toFixed(2)}</h2>

            {/* Progress Bar */}
            <div style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px", overflow: "hidden" }}>
                <div
                    style={{
                        width: `${(remainingBalance / salary) * 100}%`,
                        backgroundColor: remainingBalance > 0 ? "#4caf50" : "#f44336",
                        height: "20px",
                        transition: "width 0.3s ease",
                    }}
                ></div>
            </div>

            {/* Expense Percentages */}
            <h3>Expense Breakdown</h3>
            {expenses.length > 0 ? (
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.name}: ${expense.amount} (
                            {((expense.amount / salary) * 100).toFixed(2)}%)
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No expenses yet.</p>
            )}
        </div>
    );
};

export default BalanceDisplay;


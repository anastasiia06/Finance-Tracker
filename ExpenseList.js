import React, { useState } from "react";

const ExpenseList = ({ expenses, onDelete }) => {
    const [sorted, setSorted] = useState(false);

    const sortExpenses = () => {
        setSorted(!sorted);
    };

    const sortedExpenses = sorted
        ? [...expenses].sort((a, b) => b.amount - a.amount)
        : expenses;

    return (
        <div>
            <h3>Expenses</h3>
            <button onClick={sortExpenses}>
                {sorted ? "Sort: Default" : "Sort: Highest First"}
            </button>
            <ul>
                {sortedExpenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ${expense.amount}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;




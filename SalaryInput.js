import React from 'react';

function SalaryInput({ salary, setSalary }) {
    return (
        <div className="input-group">
            <label>Monthly Salary:</label>
            <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(parseFloat(e.target.value) || 0)}
            />
        </div>
    );
}

export default SalaryInput;



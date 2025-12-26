import React from 'react';

function Summary({ expenses }) {

  const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  
  const categorySummary = expenses.reduce((acc, item) => {
    const category = item.category || 'Other';

    if (!acc[category]) {
      acc[category] = 0;
    }

    acc[category] += Number(item.amount);
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>Expense Summary</h2>

      <p><strong>Total Expense:</strong> ₹ {totalAmount}</p>

      <h3>By Category</h3>
      <ul>
        {Object.entries(categorySummary).map(([category, amount]) => (
          <li key={category}>
            {category}: ₹ {amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;

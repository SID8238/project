function ExpenseTable({ expenses , onDeleteExpense}) {

    if(expenses.length === 0)
    {
        return <p>No expenses found.</p>;
    }else{

    return (<>
        <table className='expense-table'>
            <thead className="expense-table-head">
                <tr >
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((task, index) => (
                    <tr key={index} className='expense-table-body'>

                        <td>{index + 1}</td>
                        <td>{task.title}</td>
                        <td>{task.category}</td>
                        <td>{task.date}</td>
                        <td>{task.amount}</td>
                        <td><button onClick={() => onDeleteExpense(index)}>Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    </>);
}}

export default ExpenseTable;
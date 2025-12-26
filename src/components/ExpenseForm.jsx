import React, { useState } from 'react';

function ExpenseForm(props) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function handleAmountChange(event){
        setAmount(event.target.value);
    }

    function handleCategoryChange(event){
        setCategory(event.target.value);
    }

    function handleDateChange(event)
    {
        setDate(event.target.value);
    }

    function addExpense()
    {
        
        if(title.trim() === "")
        {
            alert(`Title can't be empty`);
            return ;
        }
        if(amount <= 0 || !Number(amount))
        {
            alert(`Invalid amount`);
            return ;
        }
        if(category.trim() === "")
        {
            alert(`No category is selected`);
            return ;
        }
        if(!date){
            alert(`Please select a date`);
            return ;
        }
        const newExpense = { title : title,
                             amount : amount,
                             category : category,
                             date : date
        }
        props.onAddExpense(newExpense);
        console.log(newExpense)

        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
    }

    
    return (
        <div className="ExpenseAdd">
            <div className="ExpenseAdd-input">
                <input type="text"
                    placeholder='Enter the title of the task'
                    value={title}
                    onChange={handleTitleChange} 
                    className="input"/>
                    <br/>
                <input type="number"
                    placeholder='Enter the amount spent'
                    value={amount}
                    onChange={handleAmountChange} 
                    className="input"/>
                <br/>
                <input type="text"
                    placeholder='Enter the category for the expense'
                    value={category}
                    onChange={handleCategoryChange} 
                    className="input"/>
                <br/>
                <input type="date"
                    value={date}
                    onChange={handleDateChange} 
                    className="input"/>
            </div>
            <button onClick = {addExpense} className='add-button'>Add Expense</button>
        </div>
    );
}

export default ExpenseForm;
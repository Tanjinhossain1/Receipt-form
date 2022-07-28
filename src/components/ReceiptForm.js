import React, { useState } from 'react';
import './ReceiptForm.css';

const ReceiptForm = () => {
    const [data, setData] = useState([])
    const receiptSubmit = (event) => {
        event.preventDefault()
        const date = event.target.date.value;
        const amount = event.target.amount.value;
        const allData = { date, amount }
        setData([...data, allData ])
        event.target.reset()
    }

    return (
        <div className='container'>
            <div className='receipt-container'>
                <h3 className='receipt-details'>Receipt Details </h3>
                <form onSubmit={receiptSubmit}>
                    <input name='date' type="text" placeholder='Enter Date' />
                    <input name='amount' type="number" placeholder='Enter Amount (in INR)' />
                    <input type="submit" value='SUBMIT' />
                </form>
                <p>date:{data?.allData?.date}</p>
            </div>
        </div>
    );
};

export default ReceiptForm;
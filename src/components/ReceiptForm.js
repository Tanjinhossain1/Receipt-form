import React, { useState } from 'react';
import './ReceiptForm.css';

const ReceiptForm = () => {
    const [data, setData] = useState([])
    const receiptSubmit = (event) => {
        event.preventDefault()
        const date = event.target.date.value;
        const amount = event.target.amount.value;
        const allData = { date, amount }
        setData([...data, allData])
        event.target.reset()
    }

    return (
        <div className='container'>
            <div className='receipt-container'>
                <h3 className='receipt-details'>Receipt Details </h3>
                <form className='form-container' onSubmit={receiptSubmit}>

                    <div>
                        <label htmlFor="date">Date<sup>*</sup></label>
                        <input className='dateInput' name='date' type="text" placeholder='Enter Date' />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount<sup>*</sup></label>
                        <input className='amountInput' name='amount' type="number" placeholder='Enter Amount (in INR)' />
                    </div>


                   <div>
                    <label htmlFor="payment">Payment mode<sup>*</sup></label>
                   <select className='paymentSelect' name="payment" id="cars">
                        <option value="volvo">Cash</option>
                        <option value="saab">Google Pay</option>
                        <option value="mercedes">Credit Card</option>
                        <option value="audi">PayTm</option>
                    </select>
                   </div>

             <div>
                <label htmlFor="remark">Remark </label>
             <input className='remarkInput' name='amount' type="text" placeholder='Enter remark' />
             </div>

                    <div className='buttons-container'>
                        <button className='cancelButton' >CANCEL <br /> <span>(ESC)</span></button>
                        <button  type="submit"  className='submitButton' >SUBMIT <br /><span> (% S)</span></button>
                       
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ReceiptForm;
import React, { useState } from 'react';
import './ReceiptForm.css';

const ReceiptForm = () => {
    const [receipt, setReceipt] = useState([])
    const receiptSubmit = (event) => {
        event.preventDefault()
        const date = event.target.date.value;
        const amount = event.target.amount.value;
        const payment = event.target.payment.value;
        const remark = event.target.remark.value;
        const allData = { date, amount, payment, remark }
        setReceipt([...receipt, allData])
        event.target.reset()
    }
    console.log(receipt)
    return (
        <div className='container'>
            <div className='receipt-container'>
                <h3 className='receipt-details'>Receipt Details </h3>
                <form className='form-container' onSubmit={receiptSubmit}>
                    {/* date input  */}
                    <div>
                        <label htmlFor="date">Date<sup>*</sup></label>
                        <input required className='dateInput' name='date' type="date" placeholder='Enter Date' />
                    </div>
                    {/* amount input  */}
                    <div>
                        <label htmlFor="amount">Amount<sup>*</sup></label>
                        <input required className='amountInput' name='amount' type="number" placeholder='Enter Amount (in INR)' />
                    </div>

                    {/* payment mood select  */}
                    <div>
                        <label htmlFor="payment">Payment mode<sup>*</sup></label>
                        <select required className='paymentSelect' name="payment" id="cars">
                            <option value="Cash">Cash</option>
                            <option value="Google Pay">Google Pay</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayTm">PayTm</option>
                        </select>
                    </div>

                    {/* remark input  */}
                    <div>
                        <label htmlFor="remark">Remark </label>
                        <input required className='remarkInput' name='remark' type="text" placeholder='Enter remark' />
                    </div>

                    {/* submit button or cancel button  */}
                    <div className='buttons-container'>
                        <button type='button' className='cancelButton' >CANCEL <br /> <span>(ESC)</span></button>
                        <button type="submit" className='submitButton' value='SUBMIT'>SUBMIT <br /> <span>(% S)</span></button>

                    </div>
                </form>

            </div>
            <table>
                <tr>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment mode</th>
                    <th>Remark</th>
                </tr>
                {
                    receipt.map((r, index) =>
                        <tr key={index + 1}>
                            <td>{index}</td>
                            <td>{r.date}</td>
                            <td> {r.amount}</td>
                            <td>{r.payment}</td>
                            <td>{r.remark}</td>
                        </tr>
                    )
                }
                <button onClick={()=>setReceipt([])} className='reset-button'>reset</button>
            </table>
        </div>
    );
};

export default ReceiptForm;
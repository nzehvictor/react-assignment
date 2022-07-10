import React from 'react'
import ETHistory from "./ETHistory"

export default function ExpenseTracker() {
  const history = [{ expense: "Bought grapes", amount: "$500" }, { expense: "Bought grapes", amount: "$500" }, { expense: "Bought grapes", amount: "$500" }];
  const his = [];
  history.forEach((item) => {
    his.push(<ETHistory text={item.expense} amount={item.amount} />)
    console.log(item)
  })
  return (
    <>
      <main style={{ textAlign: "center" }}>
        <h1>Expense Tracker</h1>
        <div>
          <p>Your Balance</p>
          <h1 id="balance">$500,000</h1>
        </div>
        <div id="divOne">
          <table
            style={{
              width: "70%",
              marginLeft: "15%",
              marginRight: "15%",
              textAlign: "center",
              padding: "10px 40px",
              borderRadius: "10px",
              boxShadow: "0px 0px 3px 3px",
            }}>
            <tr>
              <th>INCOME</th>
              <th>EXPENSE</th>
            </tr>
            <tr>
              <td
                style={{
                  color: "green",
                  fontSize: "35px",
                  borderRight: "1px solid black",
                }} >$5000</td>
              <td
                style={{
                  color: "red",
                  fontSize: "35px"
                }}>$4000</td>
            </tr>
          </table>
        </div>
        <h2>History</h2>
        <div>
          <ul style={{listStyleType:"none"}}>
            {his}
          </ul>
        </div>
        <div>
          <h3>Add New Transactions</h3>
          <label for="">Text</label><br />
          <input type="text" id="inputStr" style={{ width: "30%" }} /><br />
          <label for="">Amount  (negative-expense positive-income)</label><br />
          <input type="text" id="inputNum" style={{ width: "30%" }} /><br />
          <button style={{ width: "20%" }}>Add Transaction</button>
        </div>
      </main>
    </>
  )
}
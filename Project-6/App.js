// Get Dom elements
const balance = document.getElementById('balance');
const credit  = document.getElementById('credit');
const debit   = document.getElementById('debit');
const history = document.querySelector('.history');
const description = document.getElementById('description');


//console.log(description.value)
const amount = document.getElementById('amount');
const submit = document.getElementById('submit');
const submitTransaction = document.getElementById('add-transaction')
//  History Array for description and amount
let Transactionhistory = [
  {description: 'salary',
  amount : +5000  
  },
  {
    description: 'Buy Watch',
    amount: -90
  },
  {
    description: 'Loan',
    amount: +5002
  }
  ]
  // function to display transactiion history 
  function displayHistory () {
  
    
   history.innerHTML = Transactionhistory.map(history=>(

    `<li class='${history.amount>0 ? 'credit' :'debit'}'>${history.description} <span> ${history.amount} </span> <button class='delete-btn'>x</button> </li>`
    
    
   ) ).join('')
  
  }
displayHistory()
// function to add transaction
function addTransaction () {
  
  if(description.value==='' || amount.value===''){
  return  alert('please complete fill the form')
  }
  let transaction = {description:description.value,amount:amount.value}
  Transactionhistory=[...Transactionhistory,transaction]
//  Transactionhistory.push(transaction)
  displayHistory()
  
}
// listen for submit
submitTransaction.addEventListener('click',addTransaction)

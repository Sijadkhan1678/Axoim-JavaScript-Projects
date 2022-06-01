// Get Dom elements
const balance = document.getElementById('balance');
const credit  = document.getElementById('credit');
const debit   = document.getElementById('debit');
const history = document.querySelector('.history');
const description = document.getElementById('description');

const amount = document.getElementById('amount');
const submit = document.getElementById('submit');
const submitTransaction = document.getElementById('add-transaction')
const deleteBtn= document.querySelector('.delete-btn');
console.log(deleteBtn)
//  History Array for description and amount
let Transactionhistory = [

  {
  id : 1,  
  description: 'salary',
  amount : +5000  
  },
  {
    id: 2,
    description: 'Buy Watch',
    amount: -50
  },
  { 
    id: 3,
    description: 'Loan',
    amount: +5002
  },
  {
    id : 4,
    description: 'loss',
    amount:-50
    
  }
  ]
  
  // fumnction count credit Amount 
  function creditCounter(){
 let creditAmount=0;
let creditBalance = Transactionhistory.map(transaction=>{
      if(transaction.amount>0){
      
      return creditAmount+=transaction.amount
      
      }
    })
    
 creditBalance = creditBalance.filter(balance=> balance!==undefined )
 
 creditBalance = Math.max(...creditBalance)
 console.log(creditBalance)
 creditBalance = creditBalance==-Infinity ? 0: creditBalance
 console.log('after condition',creditBalance)
 //if(creditBalance===-Infinity){
   creditBalance.innerText=0;
   return 0
 //}else{
  credit.innerText= `+$${creditBalance}`
  console.log('after inner text',creditBalance)
  return creditBalance
 
  }
 // function to count debit amount
 function debitCounter () {
   let debitAmount = 0;
   let debitBalance = Transactionhistory.map(transaction=>{
     if(transaction.amount<0){
    
    return debitAmount +=transaction.amount
     }
  
   })
   console.log(debit)
   // to remove undefined from debitBalance array
   debitBalance= debitBalance.filter(balance=> balance !==undefined)
   console.log(debitBalance)
   
  // find max value in arrray
   debitBalance = Math.min(...debitBalance)
   console.log('after min math',debitBalance)
   console.log(debitBalance)
   if(debitBalance===Infinity){
     debit.innerText=0;
     balance.innerText= creditCounter()+0
   }else{
   // add to dom min value or display on screen
   
   debit.innerText= debitBalance;
   console.log(creditCounter())
   balance.innerText= creditCounter()+debitBalance
   console.log(debitBalance)
   }
 }
 
  // function to display transactiion history 
  function displayHistory () {
  debitCounter()
  
   history.innerHTML = Transactionhistory.map(transaction=>(

    `<li class='${transaction.amount>0 ? 'credit' :'debit'}'>${transaction.description} <span> ${transaction.amount} </span> <button class='delete-btn' onClick="deleteTransaction(${transaction.id})">x</button> </li>`
    
    
   ) ).join('')
   
  
  }
  
displayHistory()
// function to add transaction in transaction array
function addTransaction () {
  // check for empty value
  if(description.value==='' || amount.value===''){
  return  alert('please complete fill the form')
  }
  let transaction = {description:description.value,amount:amount.value}
  Transactionhistory=[...Transactionhistory,transaction]
//  Transactionhistory.push(transaction)

  displayHistory()
  
}
// function to delete transaction
function deleteTransaction (id){
  
 Transactionhistory= Transactionhistory.filter(transaction=> transaction.id !== id)
  
  console.log(Transactionhistory)
  displayHistory();
}
// listen for click to add transaction form
submitTransaction.addEventListener('click',addTransaction);
// listen for click to delete transaction history
//deleteBtn.addEventListener('click',deleteTransaction)


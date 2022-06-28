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
 
 creditBalance = Math.max(...creditBalance);
 creditBalance = creditBalance===-Infinity ? 0:creditBalance
 credit.innerText= `$ ${creditBalance}`
 
 //if(creditBalance===-Infinity){
  // creditBalance.innerText=0;
  // return creditBalnce
 //}else{
 //credit.innerText= creditBalance
//  console.log('before return',creditBalnce)
 return creditBalance;
  }
 // function to count debit amount
 function debitCounter () {
   let debitAmount = 0;
   let debitBalance = Transactionhistory.map(transaction=>{
     if(transaction.amount<0){
    
    return debitAmount +=transaction.amount
     }
  
   })
   
   // to remove undefined from debitBalance array
   debitBalance= debitBalance.filter(balance=> balance !==undefined)
  
  // find max value in arrray
   debitBalance = Math.min(...debitBalance)
   if(debitBalance===Infinity){
     debit.innerText='$ 0';
     balance.innerText= creditCounter()+0
   }else{
   // add to dom min value or display on screen
   
   debit.innerText= `$${debitBalance}`;
  // here creditCounter function return creditBalance
  //updated total balance 
  
   balance.innerText='$'+(creditCounter()+debitBalance);
   }
 }
 
  // function to display transactiion history 
  function displayHistory () {
  debitCounter()
  
   history.innerHTML = Transactionhistory.map(transaction=>(

    `<li class='${transaction.amount>0 ? 'credit' :'debit'}'>${transaction.description} <span> ${transaction.amount} </span> <button class='delete-btn' onClick="deleteTransaction(${transaction.id})">x</button> </li>`
    
    
   ) ).join('')
   
  
  }
  

// function to create id for eveey Transaction
function idcreate(){
    
    let id= Math.random()*10000
  return  id =Math.floor(id)
  
  }
  
// function to add transaction in transaction array
function addTransaction () {
  // check for empty value
  if(description.value==='' || amount.value===''){
  return  alert('please complete fill the form')
  }
  let transaction = {
    id: idcreate(),
    description:description.value,
    /* convert amount value from string to integer using
    parseInt method */
    amount:parseInt(amount.value)
    
  }
  Transactionhistory=[...Transactionhistory,transaction]
//  Transactionhistory.push(transaction)
description.value='';
amount.value= '';
  displayHistory()
  
}

// function to delete transaction
function deleteTransaction (id){
  
 Transactionhistory= Transactionhistory.filter(transaction=> transaction.id !== id)
  
  displayHistory();
}
// function to execute whole App
function main(){
  displayHistory()
}
main();
// listen for click to add transaction form
submitTransaction.addEventListener('click',addTransaction);


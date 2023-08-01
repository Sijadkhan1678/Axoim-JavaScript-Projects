const baseCurrency = document.getElementById('base-currency');
const targetCurrency = document.getElementById('target-currency');
const baseAmount = document.getElementById('base-amount');
const targetAmount = document.getElementById('target-amount');
const rate = document.getElementById('rate');
const swapBtn = document.getElementById('swapbtn');


async function exchangeCalculuator() {

  const baseCurrencyCode = baseCurrency.value
  const targetCurrencyCode = targetCurrency.value  
  const res = await fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/pair/${baseCurrencyCode}/${targetCurrencyCode}`);
  const data = await res.json()
  const conversion_rate = data.conversion_rate
  rate.innerText = `1 ${baseCurrencyCode} = ${conversion_rate} ${targetCurrencyCode}`;
  const targetAmountCurrency = new Intl.NumberFormat('en-US', { style: 'currency', currency: targetCurrencyCode }).format((conversion_rate * baseAmount.value).toFixed(2));
  targetAmount.value = targetAmountCurrency;

}

function flip() {

  const tempBaseCurrency = baseCurrency.value;
  baseCurrency.value = targetCurrency.value;
  targetCurrency.value = tempBaseCurrency;
  exchangeCalculuator()
 
}

window.addEventListener('load',exchangeCalculuator)
baseCurrency.addEventListener('change', exchangeCalculuator);
baseAmount.addEventListener('input', exchangeCalculuator);
targetCurrency.addEventListener('change', exchangeCalculuator);
targetAmount.addEventListener('input', exchangeCalculuator)
swapBtn.addEventListener('click', flip)
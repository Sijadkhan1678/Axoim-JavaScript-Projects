const search= document.getElementById('search');
const submit = document.getElementById('submit');
const meals = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');
const result = document.getElementById('result-heading');
const randomBtn = document.getElementById('random');

function fetchMeal (mealText) {
  
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealText}`)
  .then((res)=> res.json())
 .then(data=>{
    if (data== null) {
    result.innerHTML=` <h3>Result not found for ${mealText}  </h3>`
  }
    result.innerHTML=`<h3>Result found for ${mealText} </h3>`
     renderMeal(data.meals)
    
  })
 
} 


// Fetch random Meal function
function fetchRandomMeal (){
  result.innerHTML= '<h3></h3>';
  search.value=''
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=> res.json())
    .then(data =>{
      renderMeal(data.meals)
      
    })
}
function renderMeal  (mealsData) {

meals.innerHTML =  mealsData.map(meal =>(
  
     ` <div class="meal">
     <img src='${meal.strMealThumb}' alt="${meal.strMeal}">
     <div class="meal-info" meal-id='${meal.idMeal}'>
    <h3>${(meal.strMeal)}</h3>
     </div>
   </div> `
   )).join('')
  
}
// Fetch single from food api meal by id
 function fetchMealById (mealId){
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).then( res=> res.json())
     .then(data =>{
      
       const meal = data.meals[0]
       meals.innerHTML=''
       displaySelectedMeal(meal)
       console.log(meal[`strIngredient${3}`])
       
     } )
     
 }
 // function to render selected meal
 function displaySelectedMeal(meal){
   const ingredients= [];
   for(let i=1; i<=20;i++){
     if(meal[`strIngredient${i}`]){
       ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`
       ]}`)
     }else{
       break;
     }
   }
   
   selectedMeal.innerHTML= `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <div class="selected-meal-info">
      ${ meal.strCategory ?  `<p>Category:  ${meal.strCategory}</p>`:'' }
      ${meal.strArea ? `<p>Location:  ${meal.strArea}</p>` :''}
        </div>
        
        <h3>Instructions</h3>
        <p> ${meal.strInstructions}</p>
        <ul>
     ${ingredients.map( ingredient =>` <li>${ingredient}</li>`).join('')}
        </ul>
   `
 }
// Search for meal
function searchMeal (e) {
  
  e.preventDefault();
 const searchMeal = search.value;
 search.value= ''
 if (searchMeal==='') {
return   result.innerHTML= `<h3 class="red">Please enter text</h3>`
 }
 //  result.innerHTML= ''
   if(searchMeal.trim()) {
  fetchMeal(searchMeal)
 
   } 
 
 

}
submit.addEventListener('submit',searchMeal)
randomBtn.addEventListener('click',fetchRandomMeal)
meals.addEventListener('click',e=>{
  const mealInfo = e.path.find(item=>{
    if(item.classList){
      
      return item.classList.contains('meal-info')
      
    }
    else{
      return false
    }})
    console.log(mealInfo)
    if(mealInfo){
      const mealId = mealInfo.getAttribute('meal-id')

      fetchMealById(mealId)
      
    }
  
})

const wordElement=document.getElementById('word')
const incorrectLetterElement=document.getElementById('incorrect-letters')
const gameoverElement=document.getElementById('gameover-container')
const gameoverMessage=document.getElementById('gameover-message')
const notificationElement=document.getElementById('notification-container')
const PlayBtn=document.getElementById('play-btn')
// GEt Hangman's parts element
const bodypart=document.querySelectorAll('.hangman-part')
console.log(bodypart[0])
const words = ["scientist", "song", "built", "word", "spell", "value", "support", "heavy", "men", "dead", "bad", "here", "street", "dream", "eventually", "original", "broad", "floating", "daily", "tool", "swimming", "mostly", "escape", "fourth", "within", "government", "somewhere", "means", "fight", "section", "longer", "clear", "creature", "situation", "who", "were", "turn", "table", "sure", "sugar", "sister", "wool"]
const incorrectLetters=[];
// const correctLetters=['i','s','a','b','c','o','d','z','u','w','q','r','p'];
const correctLetters=[]
let randomWord=words[Math.floor(Math.random()*words.length)]

function renderWord (){
    wordElement.innerHTML=`${randomWord.split('').map(letter=>`
        
        <span class="letters"> ${ correctLetters.includes(letter) ? letter : '' }  </span>
    `).join('')}`
const wordText=wordElement.innerText.replace(/\n/g,'');

console.log(wordText)
if(wordText==randomWord){
    gameoverMessage.innerText='You  Won!'
    gameoverElement.style.display='flex'
    
}
}
function renderIncorrectLetter(){
    incorrectLetterElement.innerHTML=`<p>Incorrect Letters</p>
     ${incorrectLetters.map(letter=>`<span>${letter}</span>`)} `;
     let incorrectLength=incorrectLetters.length  
    bodypart.forEach((parts,index) => {
         if(index<incorrectLength){
             parts.style.display='block'
         }
         else{
             
             parts.style.display='none'
         }
         if(incorrectLetters.length===bodypart.length){
             gameoverMessage.innerText='You Lost!'
             gameoverElement.style.display='flex'
         }
     });
    
}

function displayNotification(){
    notificationElement.classList.add('show')
    setTimeout(()=>
    {
        notificationElement.classList.remove('show')
        },1000)
    
}

renderWord();
window.addEventListener('keydown',e=>{
    if(e.keyCode>=65 && e.keyCode<=90)
    {
        let letters = e.key
        if(randomWord.includes(letters))
        {
            if(!correctLetters.includes(letters)){
                correctLetters.push(letters)
                console.log(correctLetters)
                renderWord()
            }
            else{
                displayNotification();
            }
          
        }
        else{
            if(!incorrectLetters.includes(letters)){
                incorrectLetters.push(letters)
               renderIncorrectLetter();
            }
            else{
                displayNotification();
            }
                  }
    }
})

PlayBtn.addEventListener('click',()=>{
    //exist letters in the correctLetters array are clear  
    correctLetters.splice(0)
     //exist letters in the incorrectLetters array are clear 
    incorrectLetters.splice(0)
    gameoverElement.style.display='none'
    randomWord=words[Math.floor(Math.random()*words.length)]
    renderWord();
    renderIncorrectLetter();
})
renderWord()
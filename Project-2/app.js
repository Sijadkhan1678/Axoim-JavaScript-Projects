// get Dom 
const movieSelect = document.getElementById("movies");
const container = document.querySelector(".container")
const countSeat = document.getElementById("count")
let total = document.getElementById("total")
let ticketPrice = +movieSelect.value
function updateCount(){
    const selectedSeat=document.querySelectorAll(".row .seat.selected")
    countSeat.innerText=selectedSeat.length
    total.innerText=selectedSeat.length*ticketPrice
}






container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("Occupied")) {
        e.target.classList.toggle("selected")
    }
    updateCount();

})
movieSelect.addEventListener("change", e=>{
    ticketPrice= +e.target.value
    updateCount();
})

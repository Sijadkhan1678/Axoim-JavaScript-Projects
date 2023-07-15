const toggle=document.getElementById('menu');
const close_btn=document.getElementById('close')
const open=document.getElementById('open')
const modal = document.getElementById('modal')


toggle.addEventListener('click',function show(){
document.body.classList.toggle("show")
})
open.addEventListener('click', function close() {
   modal.classList.add('show-modal')
})
close_btn.addEventListener('click', () => modal.classList.remove('show-modal'))

window.addEventListener('click', e=>
 e.target==modal ?  modal.classList.remove('show-modal'): false
)


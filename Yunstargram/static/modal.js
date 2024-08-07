const modal = document.querySelector('.modal');
const btnOpenModal=document.querySelector('#btn-open-modal');
const btnCloseModal=document.querySelector('#close_button');
const body = document.body;

btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
    body.style.overflow = "hidden";
});


btnCloseModal.addEventListener("click", ()=>{
    modal.style.display="none";
    body.style.overflow = "auto";
});

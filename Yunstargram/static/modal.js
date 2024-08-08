const modal = document.querySelector('.modal');
const btnOpenModal=document.querySelector('#btn-open-modal');
const btnCloseModal=document.querySelector('#close_button');
const body = document.body;

btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
    body.style.overflow = "hidden";
    console.log("add button click event occured")
});


btnCloseModal.addEventListener("click", ()=>{
    console.log("click event occured on close button");
    modal.style.display="none";
    body.style.overflow = "auto";
});


$("#img_upload_space")
    .on("click", clickEventHandler)
    .on("dragover", dragOver)
    .on("dragleave", dragOver)
    .on("drop", uploadFiles);

function clickEventHandler(event){
    console.log("click event occured")
}

function dragOver(event){
    console.log("dragover event occured");
    event.stopPropagation();
    event.preventDefault();
};

function uploadFiles(event){
    console.log("drop event occured");
    event.stopPropagation();
    event.preventDefault();
};

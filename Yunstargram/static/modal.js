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

    let container = document.getElementById('image_added');

    if ( container != null )
    {
        container.remove()
    }
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

    if( event.type == "dragover"){
        $(event.target).css({
            "background-color": "black",
            "outline-offset": "-20px"
        });
    } else {
        $(event.target).css({
            "background-color": "lightgray",
            "outline-offset": "-20px"
        });
    }

    // console.log(event)

};

function uploadFiles(event){
    console.log("drop event occured");
    event.stopPropagation();
    event.preventDefault();

    dragOver(event);

    event.dataTransfer = event.originalEvent.dataTransfer;
    // console.log(event.target.files);
    // console.log(event.dataTransfer.files);
    var files = event.target.files || event.dataTransfer.files;

    if( files.length > 1){
        alert("파일을 하나만 올려주세요.");
        return;
    }

    loadFile(files);
    console.log(files);


};

function loadImage(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("image loaded")
};

function loadFile(input_file)
{
    let file = input_file[0];
    // console.log(input_file);
    // let file = input_file[0]; // 선택파일 가져오기
    // console.log(file);

    // let newImage = document.createElement("img"); //새 이미지 태그 생성


    // //이미지 source 가져오기
    // newImage.src = URL.createObjectURL(file);
    // console.log(newImage);
    // newImage.style.width = "100%"; //div에 꽉차게 넣으려고
    // newImage.style.height = "100%";
    // newImage.style.objectFit = "cover"; // div에 넘치지 않고 들어가게
    // newImage.id = "image_added";

    // //이미지를 image-show div에 추가
    // let container = document.getElementById('img_upload_space');
    // container.appendChild(newImage);

    var reader = new FileReader();

    reader.onload = function(e) {
        var image = new Image();
        image.src = e.target.result;

        image.onload = function() {
            var originalWidth = image.width;
            var originalHeight = image.height;

            // 화면에 이미지가 삽입될 컨테이너
            var container = document.getElementById('img_upload_space');

            // 긴 쪽을 100%로 맞추고 비율 유지
            if (originalWidth > originalHeight) {
                image.style.width = '100%';
                image.style.height = 'auto';
            } else {
                image.style.width = 'auto';
                image.style.height = '100%';
            }

            // 컨테이너에 이미지 추가
            container.innerHTML = '';
            container.appendChild(image);
        };
    };

    reader.readAsDataURL(file);
}

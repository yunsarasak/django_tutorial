let modal = document.querySelector('#first_modal');
let second_modal = document.querySelector('#second_modal');
const btnOpenModal=document.querySelector('#btn-open-modal');
const btnCloseModalList=document.querySelectorAll('#close_button');
const body = document.body;

let g_file;

btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex";
    body.style.overflow = "hidden";
    console.log("add button click event occured")
});

$('#post_button').click(function(){
    // alert("button clicked");

    let file = g_file[0];
    let image_name = g_file[0].name;
    let feed_content = $('#feed_content_text').val();
    let user_id = "akong_lover";
    let profile_image = "data:image/jpeg;base64,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"
    // alert("file name:" + image_name
    //     + "\ncontent:" + feed_content
    //     + "\nuser_id:" + user_id
    //     + "\nprofile_iamge:" + profile_image
    // );

    let form_data = new FormData();

    form_data.append('file', file);
    form_data.append('image', image_name);
    form_data.append('feed_content', feed_content);
    form_data.append('user_id', user_id);
    form_data.append('profile_image', profile_image);

    ($.ajax)({
        url: "content/upload",
        data: form_data,
        method: "POST",
        processData: false,
        contentType: false,
        success: function( data){
            console.log("succ");
        },
        error: function(request, status, error){
            console.log("err");
        },
        complete: function(){
            console.log("complete");
            location.replace("");
        }
    });

});


for( let btnCloseModal of btnCloseModalList )
{
    btnCloseModal.addEventListener("click", () => {
        console.log("click event occured on close button");
        // modal.style.display = "none";
        parent_modal = btnCloseModal.parentElement.parentElement.parentElement;
        parent_modal.style.display = 'none';
        parent_modal.style.display = 'none';
        body.style.overflow = "auto";

        let container = document.getElementById('image_added');

        if( parent_modal.id == 'first_modal')
        {
            if (container != null) {
                container.remove()
            }
        }
    });
}


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

    loadFile(files, event);
    // console.log(files);


};

function loadImage(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("image loaded")
};

function popSecondModal(event)
{
    event.stopPropagation();
    event.preventDefault();

    modal.style.display = 'none';
    // $('#first_modal').css({
    //     "display": 'none'
    // });

    // second_modal.style.display = 'flex';
    $('#second_modal').css({
        "display": 'flex',
        'background': 'lightred'
    });

    return;
}

function loadFile(input_file, event)
{
    let file = input_file[0];
    g_file = input_file;

    console.log( file.type )

    if( file.type.match('image.*/')){
        $(event.target).css({
            "background-image": "url("+ window.URL.createObjectURL(file) + ")",
            "outline": "none",
            "background-repeat": 'no-repeat',
            "background-size": 'contain',
            "background-position": 'center'
        });

        $('#second_modal_image_section').css({
            "background-image": "url("+ window.URL.createObjectURL(file) + ")",
            "outline": "none",
            "background-position": 'center',
            "background-size": 'contain',
            "background-repeat": 'no-repeat',
        });

        
    }
    else
    {
        alert('not an image.');
        return;
    }
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

    // var reader = new FileReader();

    // reader.onload = function(e) {
    //     var image = new Image();
    //     image.src = e.target.result;

    //     image.onload = function() {
    //         var originalWidth = image.width;
    //         var originalHeight = image.height;

    //         // 화면에 이미지가 삽입될 컨테이너
    //         var container = document.getElementById('img_upload_space');

    //         // 긴 쪽을 100%로 맞추고 비율 유지
    //         if (originalWidth > originalHeight) {
    //             image.style.width = '100%';
    //             image.style.height = 'auto';
    //         } else {
    //             image.style.width = 'auto';
    //             image.style.height = '100%';
    //         }

    //         // 컨테이너에 이미지 추가
    //         container.innerHTML = '';
    //         container.appendChild(image);
    //     };
    // };

    // reader.readAsDataURL(file);
    popSecondModal(event);
}

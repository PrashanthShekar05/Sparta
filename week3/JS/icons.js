    //like bookmark post 
    var i = 0;
    $('.bi-suit-heart').on('click', function () {
        if (i == 0) {
            $(this).removeClass('bi-suit-heart');
            $(this).addClass('bi-suit-heart-fill');
            i++;
        } else if (i == 1) {
            $(this).removeClass('bi-suit-heart-fill');
            $(this).addClass(' bi-suit-heart');
            i--;
        }

    });
    $('.bi-bookmark').on('click', function () {
        if (i == 0) {
            $(this).removeClass('bi-bookmark');
            $(this).addClass('bi-bookmark-fill');
            i++;
        } else if (i == 1) {
            $(this).removeClass('bi-bookmark-fill');
            $(this).addClass('bi-bookmark');
            i--;
        }

    });
//clip post 
function clip() {

    var url = '';    // declare url variable
    var textarea = document.createElement("textarea");
     //create a varible called textarea and assign the textarea 


    document.body.appendChild(textarea); //add textarea right above the body tag
    url = window.document.location.href;  //assign current address to the url
    textarea.value = url;  // assign current address to the value of textarea
    textarea.select();  //select all the texts in a <textarea>
    document.execCommand("copy");   // copy
    document.body.removeChild(textarea); //remove the content of the textarea 

    alert("link copied")  // alert the content
}
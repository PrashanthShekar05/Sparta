// assign contents in captions to variables
let first = document.getElementById('captionFirst').innerText
let second = document.getElementById('captionSecond').innerText
let third = captionContent = document.getElementById('captionThird').innerText

//readmore functions
function captionFirst() {
    if (first.length > 8) {
        $("#captionFirst").html(`${first.substring(0, 8)}...`);
    }
}
function captionSecond() {
    if (second.length > 8) {
        $("#captionSecond").html(`${second.substring(0, 8)}...`);
    }
}
function captionThird() {
    if (third.length > 8) {
        $("#captionThird").html(`${third.substring(0, 8)}...`);
    }
}
function readMoreFirst() {
    $("#captionFirst").text(first)
    $("#btn-1").hide()

}
function readMoreSecond() {
    $("#captionSecond").text(second)
    $("#btn-2").hide()
}
function readMoreThird() {
    $("#captionThird").text(third)
    $("#btn-3").hide()
}
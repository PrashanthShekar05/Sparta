//focused input
$(document).ready(function() {
    $('#smail-1').click(function() {
        $("#commentFirstInput").focus();
    })
    $('#smail-2').click(function() {
        $("#commentSecondInput").focus();
    })
    $('#smail-3').click(function() {
        $("#commentThirdInput").focus();
    })
});

// the funtions that show comments on the page
//first feed comments
function postFirstComment() {
    let comment = $("#commentFirstInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#firstComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentFirstInput').value = null
    }


}
//second feed comments
function postSecondComment() {
    let comment = $("#commentSecondInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#secondComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentSecondInput').value = null
    }

}
//the last feed comments
function postThirdComment() {
    let comment = $("#commentThirdInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#thirdComment').append(temp_html)
        //initializing the input box value
        document.getElementById('commentThirdInput').value = null
    }


}
    //search funtion
    function search() {
        let searchWord = $("#searchInput").val();
        let link = `https://www.instagram.com/explore/tags/${searchWord}`
        if (window.event.keyCode == 13) {
            location.href = link;
        }

    }
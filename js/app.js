window.addEventListener("load", function (event) {

    const gridItem = document.querySelectorAll('.grid-item');
    const gridLen = document.querySelectorAll('.grid-item').length;
    console.log(gridItem)
    var i;

    for (i = 0; i < gridLen; i++) {
        gridItem[i].addEventListener('click', function () {
            // alert("addEventListener");
            
        });
    }



});
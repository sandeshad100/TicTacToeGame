window.addEventListener("load", function (event) {

    //default array
    var arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    const gridItem = document.querySelectorAll('.grid-item');
    const gridLen = document.querySelectorAll('.grid-item').length;
    console.log(gridItem)
    var i;

    // const itemNine = document.getElementById(x).innerText;
    for (i = 0; i < gridLen; i++) {

        gridItem[i].addEventListener('click', function (e) {
            
            var itemNo = this.id;
            var row = itemNo.charAt(0);
            var col = itemNo.charAt(1);
            
            console.log(typeof itemNo);
            console.log("row = " + itemNo.charAt(0));
            console.log("col = " + itemNo.charAt(1));

            ticArray(itemNo);

        });
    }


    function ticArray(x) {


        // col = x % 10;
        // row = Math.floor(x / 10);

        // console.log("Row: " + row);
        // console.log("Col: " + col);
        // console.log(arr);


        //arr[];

    }

    function setTicArray(index) {

    }



});
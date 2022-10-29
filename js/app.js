window.addEventListener("load", function (event) {

    //default array
    var arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    var turn = 1;
    var playerTurn = "A";
    var content;
    var itemNo;
    var ele;

    const gridItem = document.querySelectorAll('.grid-item');
    const gridLen = document.querySelectorAll('.grid-item').length;
    const player = document.getElementById('player');
    const parent = document.getElementsByClassName('grid-parent');
    // console.log(gridItem)
    var i;

    for (i = 0; i < gridLen; i++) {

        gridItem[i].addEventListener('click', function (e) {
            ele = document.getElementById(e.target.id);
            // if(turn%2 == 0){
            //     ele.classList.add('bgA');
            // }
            // else{
            //     ele.classList.add('bgB');
            // }

            // console.log(id);
            itemNo = this.id;
            // console.log(typeof itemNo);
            var row = parseInt(itemNo.charAt(1));
            var col = parseInt(itemNo.charAt(2));

            // console.log(typeof/ row);
            // console.log("row = " + itemNo.charAt(0));
            // console.log("col = " + itemNo.charAt(1));
            var isPut = putOnArray(row, col);


        });

    }
    alert("Event added");


    function putOnArray(r, c) {
        if (isEmpty(r, c)) {
            if (turn % 2 == 0) {

                ele.classList.add('bgA');
                arr[r][c] = 2;
                player.innerText = "A"
                playerTurn = "B";

            } else {

                ele.classList.add('bgB');
                arr[r][c] = 1;
                player.innerText = "B"
                playerTurn = "A";
            }
            checkPattern();
            turn++;

            console.log(arr);
            // return true;
        }




    }

    function isEmpty(r, c) {
        if (arr[r][c] == 0) {
            return true;
        } else {
            return false;
        }
    }

    function checkPattern() {
        if (playerTurn == "A") {
            content = 1;
        } else {
            content = 2;
        }
        var n, m, count;

        //check row wise
        for (n = 0; n < 3; n++) {
            count = 0;
            for (m = 0; m < 3; m++) {
                if (arr[n][m] == content) {
                    count++;
                    console.log("::Count = " + count + " for " + playerTurn);
                }

            }
            if (count == 3) {
                response();
            }
        }
    }

    function response() {

        if (playerTurn == "A") {
            // alert("Player A Won!");
            setTimeout(function () { alert("Player A Won!"); }, 1);
        }
        else {
            // alert("Player B Won!");
            setTimeout(function () { alert("Player B Won!"); }, 1);
        }
    }

    alert("Ready");
});





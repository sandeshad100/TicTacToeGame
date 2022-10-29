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
            itemNo = this.id;
            var row = parseInt(itemNo.charAt(1));
            var col = parseInt(itemNo.charAt(2));
            var isPut = putOnArray(row, col);


        });

    }


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
        //check diagonal
        diagoLtoR = 0;
        diagoRtoL = 0;
        //left to right diagonal
        for (n = 0; n < 3; n++) {
            if (arr[n][n] == content) {
                diagoLtoR++;
            }
        }
        //right to left diagonal
        if (arr[0][2] == content && arr[1][1] == content && arr[2][0] == content) {
            diagoRtoL = 3;
        }
        if(diagoLtoR == 3 || diagoRtoL == 3){
            response();
        }
        //check row and column wise
        for (n = 0; n < 3; n++) {
            countRow = 0;
            countCol = 0;
            for (m = 0; m < 3; m++) {
                if (arr[n][m] == content) {
                    countRow++;
                   
                }
                if (arr[m][n] == content) {
                    countCol++;
                    
                }

            }
            if (countRow == 3 || countCol == 3) {
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





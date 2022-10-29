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
    var gameOver = false;
    // audio 
    var audioWin = new Audio("./assets/audio/winner.wav");
    var audioStart = new Audio("./assets/audio/start.wav");
    var audioPut = new Audio("./assets/audio/putAudio.wav");
    // model box
    const startBtn = document.getElementById('btnStart');
    //add event 
    const gridItem = document.querySelectorAll('.grid-item');
    const gridLen = document.querySelectorAll('.grid-item').length;
    const feedback = document.getElementById('feedback');
    var i;
    for (i = 0; i < gridLen; i++) {
        gridItem[i].addEventListener('click', function (e) {
            ele = document.getElementById(e.target.id);
            itemNo = this.id;
            var row = parseInt(itemNo.charAt(1));
            var col = parseInt(itemNo.charAt(2));
            putOnArray(row, col);
        });
    }
    function putOnArray(r, c) {
        if (isEmpty(r, c)) {
            if (turn % 2 == 0) {

                ele.firstChild.src = "./assets/images/cross2.svg"
                arr[r][c] = 2;
                feedback.innerText = "Turn for A"
                playerTurn = "B";
               
                audioPut.play();
            } else {

                ele.firstChild.src = "./assets/images/circle.svg"
                arr[r][c] = 1;
                feedback.innerText = "Turn for B"
                playerTurn = "A";
           
                audioPut.play();
            }
            checkPattern();
            turn++;
            //check for draw
            if (turn == 10 && !gameOver) {
                setTimeout(function () { alert("Draw"); }, 1);
                gameOver = true;
                window.location.reload();
            }
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
        if (diagoLtoR == 3 || diagoRtoL == 3) {
            response();
        }

        //check row and column
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
        // console.log(gameOver);

    }

    function response() {
feedback.classList.add('newColor');
    
        if (playerTurn == "A") {
            feedback.innerHTML = "Player A Won";
            audioWin.play();
            setTimeout(function () { alert("Player A Won!"); }, 1);

        }
        else {
            feedback.innerHTML = "Player B Won";
            audioWin.play();
            setTimeout(function () { alert("Player B Won!"); }, 1);



        }
audioWin.play();
        gameOver = true;

        window.location.reload();

    }

    //model
    // Get the modal
    var modal = document.getElementById("model-wrap");
    startBtn.onclick = function () {
        modal.style.display = "none";
        audioStart.play();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            audioStart.play();
        }
    }
});





//Get array of buttons
var btnArray = document.getElementsByClassName("btn");
for (var _i = 0, btnArray_1 = btnArray; _i < btnArray_1.length; _i++) {
    var btn = btnArray_1[_i];
    //added event listener
    btn.addEventListener("click", myFunction);
}
var turn = true;
//whene the button is clicked
function myFunction(e) {
    var btn = document.getElementById(this.id);
    if (btn)
        //whene turn is true x move
        if (turn == true)
            btn.innerText = "x";
        //if not o is move
        else
            btn.innerText = "o";
    btn === null || btn === void 0 ? void 0 : btn.setAttribute("disabled", "true");
    checkWIn();
    // after we check who win there change in turn
    turn = !turn;
}
function checkWIn() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var btn1 = (_a = document.getElementById("b1")) === null || _a === void 0 ? void 0 : _a.innerText;
    var btn2 = (_b = document.getElementById("b2")) === null || _b === void 0 ? void 0 : _b.innerText;
    var btn3 = (_c = document.getElementById("b3")) === null || _c === void 0 ? void 0 : _c.innerText;
    var btn4 = (_d = document.getElementById("b4")) === null || _d === void 0 ? void 0 : _d.innerText;
    var btn5 = (_e = document.getElementById("b5")) === null || _e === void 0 ? void 0 : _e.innerText;
    var btn6 = (_f = document.getElementById("b6")) === null || _f === void 0 ? void 0 : _f.innerText;
    var btn7 = (_g = document.getElementById("b7")) === null || _g === void 0 ? void 0 : _g.innerText;
    var btn8 = (_h = document.getElementById("b8")) === null || _h === void 0 ? void 0 : _h.innerText;
    var btn9 = (_j = document.getElementById("b9")) === null || _j === void 0 ? void 0 : _j.innerText;
    // first row win
    if (btn1 == btn2 && btn1 == btn3 && btn1 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    //second row win
    if (btn4 == btn5 && btn4 == btn6 && btn4 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    // 3 row win
    if (btn7 == btn8 && btn7 == btn9 && btn7 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    // first col win
    if (btn1 == btn4 && btn1 == btn7 && btn1 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    //second col win
    if (btn2 == btn5 && btn2 == btn8 && btn2 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    // 3 col win
    if (btn3 == btn6 && btn3 == btn9 && btn3 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    // diagonal 1-5-9 win
    if (btn1 == btn5 && btn1 == btn9 && btn1 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
    // diagonal 3-5-7 win
    if (btn3 == btn5 && btn3 == btn7 && btn3 != "\xa0") {
        alert("Congratulations!! you are the winner :)");
        location.reload();
    }
}
//Bind reset board function to button
var resetBtn = document.getElementById("reset");
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetBoard);
function resetBoard() {
    location.reload();
}

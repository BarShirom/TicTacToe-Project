//Get array of buttons
let btnArray = document.getElementsByClassName("btn") 
for(let btn of btnArray){
    //added event listener
    btn.addEventListener("click", myFunction)

}

let turn = true

//whene the button is clicked
function myFunction(e:Event) {
    let btn = document.getElementById(this.id)
    if(btn)
    //whene turn is true x move
    if(turn == true)
    btn.innerText = "x"
    //if not o is move
    else btn.innerText = "o"
    btn?.setAttribute("disabled", "true")
    checkWIn()
    // after we check who win there change in turn
    turn = !turn

  }

  function checkWIn(){
    let btn1 = document.getElementById("b1")?.innerText
    let btn2 = document.getElementById("b2")?.innerText
    let btn3 = document.getElementById("b3")?.innerText
    let btn4 = document.getElementById("b4")?.innerText
    let btn5 = document.getElementById("b5")?.innerText
    let btn6 = document.getElementById("b6")?.innerText
    let btn7 = document.getElementById("b7")?.innerText
    let btn8 = document.getElementById("b8")?.innerText
    let btn9 = document.getElementById("b9")?.innerText

// first row win
    if (btn1 == btn2 && btn1 == btn3 && btn1 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    //second row win
    if (btn4 == btn5 && btn4 == btn6 && btn4 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    // 3 row win
    if (btn7 == btn8 && btn7 == btn9 && btn7 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    // first col win
    if (btn1 == btn4 && btn1 == btn7 && btn1 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    //second col win
    if (btn2 == btn5 && btn2 == btn8 && btn2 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    // 3 col win
    if (btn3 == btn6 && btn3 == btn9 && btn3 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    // diagonal 1-5-9 win
    if (btn1 == btn5 && btn1 == btn9 && btn1 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
    // diagonal 3-5-7 win
    if (btn3 == btn5 && btn3 == btn7 && btn3 != "\xa0"){
        alert("Congratulations!! you are the winner :)")
        location.reload()

    }
  }

//Bind reset board function to button
  let resetBtn = document.getElementById("reset")
  resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetBoard)
  
  function resetBoard() {
    location.reload()
}


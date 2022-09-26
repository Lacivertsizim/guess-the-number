let guessNumber=0;

let numberInput = document.getElementById("number")
let checkBtn = document.getElementById("check-btn")
let result=document.getElementById("last-div")

console.log(result)


//console.log(numberInput, checkBtn)

checkBtn.onclick=function(){
    let value=Number(numberInput.value);
    guessNumber=guessNumber+value;
    console.log("Butona tiklandi",guessNumber,value)
    result.innerHTML=guessNumber;
    numberInput.value=0;
}
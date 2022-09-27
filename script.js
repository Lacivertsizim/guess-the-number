let guessNumber=0;
let originalNumber=randomInt(0,100);

console.log(originalNumber);

let numberInput = document.getElementById("number")
let checkBtn = document.getElementById("check-btn")
let result=document.getElementById("last-div")
let guessNumberHtml = document.querySelector('#guess-number')

console.log(guessNumberHtml);

//console.log(result)


//console.log(numberInput, checkBtn)

checkBtn.onclick=function(){
    let value=Number(numberInput.value);
    guessNumber = guessNumber + 1;
    guessNumberHtml.textContent = guessNumber;
    guessNumber=guessNumber+value;
    console.log("Butona tiklandi",guessNumber,value)
    result.innerHTML=guessNumber;
    numberInput.value=0;

    console.log(originalNumber,value);
    if (originalNumber > value) {
        result.style.color = 'red';
        result.innerHTML = "Daha buyuk sayı giriniz...";
    } else if (originalNumber < value) {
        result.style.color ='blue';
        result.innerHTML = "Daha kucuk sayı giriniz...";
    } else {
        result.style.color = 'green';
        result.innerHTML = "Doğru sayı bildiniz...";
    }
}

let buton = document.createElement("button");
buton.innerHTML = "Tıkla"

document.body.appendChild(buton);

function randomInt(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

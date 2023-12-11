var a = Math.random()*6;
var randomNumber1 = Math.floor(a)+1; //1-6
var randomDice = "./images/dice"+randomNumber1+".png";
document.getElementsByTagName("img")[0].setAttribute("src" , randomDice);
var b = Math.random()*6;
var randomNumber2 = Math.floor(b)+1; //1-6
var randomDice1 = "./images/dice"+randomNumber2+".png";
document.getElementsByTagName("img")[1].setAttribute("src" , randomDice1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw! Refresh me again.";
}
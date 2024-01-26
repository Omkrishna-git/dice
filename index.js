// alert("Working !!!")
var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

var num = (Math.floor(randomNumber1*6)) + 1;
var num2 = (Math.floor(randomNumber2*6)) + 1;

var randomDiceImage = "./images/dice"+num+".png";//./images/dice6.png
var randomDiceImage2 = "./images/dice"+num2+".png";//./images/dice6.png
// alert(num);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

if (num > num2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins !!!"
}
else if (num < num2) {
    document.querySelector("h1").innerHTML = " Player 2 Wins 🏆 !!!"
} 
else if(num === num2){
    document.querySelector("h1").innerHTML = "🏆 Match Draw 🏆 "
}
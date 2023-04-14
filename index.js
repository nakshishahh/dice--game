 let n = Math.round((Math.random()*6));
 let x = Math.round((Math.random() * 6));
 var randomdice = "image/dice" + n + ".png";

 document.querySelectorAll("img")[0].setAttribute("src", randomdice);

var randomdice2 = "image/dice" + x + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomdice2);

if(n>x){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS! ";
}else if(n<x){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS! ";

}else{
    document.querySelector("h1").innerHTML = "DRAW"
}



 


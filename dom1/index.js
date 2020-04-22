
var n1 =Math.floor(Math.random()*6)+1;
var srcName1 = "images/"+"dice" + n1 + ".png";
document.querySelector(".img1").setAttribute("src", srcName1);
var n2 = Math.floor(Math.random()*6)+1;
var srcName2 = "images/"+"dice"+ n2 + ".png";
document.querySelector(".img2").setAttribute("src", srcName2);

if(n1>n2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(n2>n1){
  document.querySelector("h1").innerHTML="Player 2 WIns";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}

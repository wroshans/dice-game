var randomNumber1=Math.floor(Math.random()*6+1);
var randomImage= "dice"+randomNumber1+".png";
var randomImagePath="images/"+randomImage;
var tagSelect=document.querySelector(".img1");

tagSelect.setAttribute("src",randomImagePath);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage= "dice"+randomNumber2+".png";
var randomImagePath="images/"+randomImage;
var tagSelect=document.querySelector(".img2");

tagSelect.setAttribute("src",randomImagePath);

if(randomNumber1===randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Draw!"
}
else if(randomNumber1>randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player1 win!"
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="Player2 win!"
}
function refreshPage(){
  window.location.reload();
} 
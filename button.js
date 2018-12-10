var otherWindow;
var counter = 0;
document.getElementById("theButton").addEventListener("click", function(){ 
console.log("qualcosa va");
otherWindow = window.open("https://manukko.github.io/Bilboard-1/", "otherWindow");
document.getElementById("theButton").value="ora si che funziono<3";
if(counter<1){
  otherWindow.postMessage("otherFunc", "*")
}
  counter++;
  
});

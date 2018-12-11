var otherWindow;
var counter = 0;
document.getElementById("theButton").addEventListener("click", function(){ 
console.log("qualcosa va");
otherWindow = window.open("https://manukko.github.io/Bilboard-1/", "otherWindow");
document.getElementById("theButton").value="ora si che funziono<3";
  console.log(otherWindow.postMessage("otherFunc", "*"));
  setTimeout(function(){ alert("Hello"); }, 3000);

  counter++;
  
});

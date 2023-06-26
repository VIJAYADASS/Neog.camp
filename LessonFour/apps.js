var btntranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");
 
 
console.log(outputDiv);


function clickEventHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
};

btntranslate.addEventListener ("click", clickEventHandler) 
    

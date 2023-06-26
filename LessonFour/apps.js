var btntranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");
 

function clickEventHandler() {
    outputDiv.innerText = "Talk me"  +  txtInput.value;
};

btntranslate.addEventListener ("click", clickEventHandler) 
    

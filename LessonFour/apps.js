var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");
 
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 
/*fetch()*/
function gettranslation(text){
    return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
    //outputDiv.innerText = "Talk me  "+  txtInput.value;
    var inputText = txtInput.value; //ip

    // call server
    fetch(gettranslation(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
};

btntranslate.addEventListener ("click", clickEventHandler) 
    

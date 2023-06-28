var btntranslate = document.querySelector("#btn-translate"); // get button
var txtInput = document.querySelector("#txt-input"); // get input
var outputDiv = document.querySelector("#Output"); //get output
 
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 

var serverURL = "https://api.funtranslations.com/translate/dolan.json" // we want to talk to the dolan server
/*fetch()*/
function gettranslation(input){
    return serverURL + "?" + "text=" + input // serverurl + query  + key= + value
}

/*Error handler*/
function errorhandler(error) {
    console.log("error occured", error);
    alert("Try again later")
}

function clickEventHandler() {
     
    var inputText = txtInput.value; //ip

    // call server
    fetch(gettranslation(inputText))
    .then(response => response.json())
    //.then(json => console.log(json.contents.translated))
    .then(abc => {
        var translatedText = abc.contents.translated;
        outputDiv.innerText = translatedText;
    })
};

btntranslate.addEventListener ("click", clickEventHandler) 
    

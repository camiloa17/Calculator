
//Add event listener for all Buttons
var calcButtons = document.querySelectorAll("button").length;

for (i=0; i <calcButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        console.log(this.getAttribute("id"));

        if(this.getAttribute("id") =="number"){

        writeToCalculator(this.innerText);

        } else if (this.getAttribute("id") == "deleteButton"){
            deleteText();
        } else if(this.getAttribute("id") == "resetButton"){
            resetCalc();
        } else if(this.getAttribute("id") == "equal") {
            calculator();
        }
      
    });
}


// Add event Listener for key press
document.addEventListener("keydown", function(event){
    if(event.key == "=" || event.key =="Enter"){
        calculator();
    }
});


function writeToCalculator(number){

    document.querySelector("input").value = document.querySelector("input").value + number;
}

function deleteText(){
    var userInput = document.querySelector("input").value;

    userInput = userInput.slice(0, userInput.length - 1)
    document.querySelector("input").value = userInput;
}

function resetCalc(){
    document.querySelector("input").value =" ";
}

function calculator() {
    document.querySelector("input").value = eval(document.querySelector("input").value);
}


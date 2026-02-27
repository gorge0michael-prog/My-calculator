const display = document.getElementById("display");
function inputdisplay(input){
display.value += input;
}

function cleardisplay(){
display.value = "";
}

function calculate(){
    try{
display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function deletedisplay() {
    display.value = display.value.slice(0, -1);
}
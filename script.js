const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        if(display.value === "") return;
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

/* Scientific Functions */
function applyFunc(func){

    let x = parseFloat(display.value);

    if(isNaN(x)){
        display.value = "Error";
        return;
    }

    let result;

    switch(func){
        case "sin":
            result = Math.sin(x*Math.PI/180);
            break;
        case "cos":
            result = Math.cos(x*Math.PI/180);
            break;
        case "tan":
            result = Math.tan(x*Math.PI/180);
            break;
        case "sqrt":
            result = Math.sqrt(x);
            break;
        case "log":
            result = Math.log10(x);
            break;
        case "ln":
            result = Math.log(x);
            break;
    }

    if(Math.abs(result) < 1e-10) result = 0;

    display.value = parseFloat(result.toFixed(10));
}

/* ✅ FIXED square FUNCTION */
function square(){
    let x = parseFloat(display.value);

    if(isNaN(x)){
        display.value = "Error";
        return;
    }

    display.value = x * x;
}
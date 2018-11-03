var a,b;
var c;

function plus(){
    a = parseInt(document.getElementById("one").value);
    b = parseInt(document.getElementById("two").value);
    c = a + b;
    document.getElementById("div").innerHTML = "Result Addion : " + c;
}
function minus(){
    a = parseInt(document.getElementById("one").value);
    b = parseInt(document.getElementById("two").value);
    c = a - b;
    document.getElementById("div").innerHTML = "Result Subtraction : " + c;
}
function multi(){
    a = parseInt(document.getElementById("one").value);
    b = parseInt(document.getElementById("two").value);
    c = a * b;
    document.getElementById("div").innerHTML = "Result Mutiplication : " + c;
}
function division(){
    a = parseInt(document.getElementById("one").value);
    b = parseInt(document.getElementById("two").value);
    if (b == 0){
        document.getElementById("div").innerHTML = "Cant divide 0 by " + a;
    }
    else {
        c = a / b;
        document.getElementById("div").innerHTML = "Result Division : " + c;
    }
}
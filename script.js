
let output = document.getElementById('display');

function display(num) {
    output.value += num;
}
function calculate() {
    try {
        output.value = eval(output.value); 
    }
    catch (err) {
        alert("invalid");
    }
}
function Clear() {
    output.value = "";
}
function Delete(){
    output.value = output.value.slice(0,-1);
}

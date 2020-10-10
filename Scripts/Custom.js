// JavaScript source code

//This is an optimal way to code the FizzBuzz Challenge
function FizzBuzz(val1, val2) {
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {
        returnArray[i] = ((i % val1 == 0 ? 'Fizz' : '') + (i % val2 == 0 ? 'Buzz' : '') || i);
    }
    return returnArray;
}

function FizzBuzzter() {
    //Grab the template from the HTML document
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    var templateHTML = rowTemplate.innerHTML;
    var resultsHTML = headTemplate.innerHTML;
    //Get the values I want to use
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    //Call the Fizz Buzz Function
    output = FizzBuzz(val1, val2);
    //Empty value restriction else function output
    if (val1 == "" || val2 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You missed some input!',
            confirmButtonText: 'Go Back',
        })
    } else {
        for (i = 1; i < output.length; i += 5) {
            resultsHTML += templateHTML.replace('{{val1}}', output[i])
                .replace('{{val2}}', output[i + 1])
                .replace('{{val3}}', output[i + 2])
                .replace('{{val4}}', output[i + 3])
                .replace('{{val5}}', output[i + 4]);
        }
        document.getElementById('results').innerHTML = resultsHTML;
        $("#exampleModal").modal();
    }
}

//Input restriction for just numbers
$(".numOnly").keypress(function (e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        return false;
    };
});

//Fun phone animation
function shakeScreen() {
    document.getElementById("shake").setAttribute("class", "animate__animated animate__shakeY")
}
//Apply the functions
function reset() {
    document.getElementById("shake").setAttribute("class", "")
}
document.getElementById("phoneButton").addEventListener("dblclick", shakeScreen)
document.getElementById("thePhone").addEventListener("click", reset)
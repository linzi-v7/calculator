
let firstNumber = 0;
let chosenOperation = " "
let secondNumber = 0;

const equalsButton = document.querySelector(".equal");
equalsButton.addEventListener("click", function () { operate(1, 1, "+") })

function operate(num1, num2, operation)
{
    if ((num1 == undefined) || (num2 == undefined))
    {
        console.log("error, invalid numbers");
        return;
    }

    console.log("here");

    switch (operation)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            console.log("error, invalid operation");
    }
}

function populateDisplay(input)
{
    let display = document.querySelector(".calculator-display");

    if (display.innerText == "0")
    {
        display.innerText = "";
    }
    display.innerText += input
}
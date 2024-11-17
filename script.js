


const equalsButton = document.querySelector(".equal");
equalsButton.addEventListener("click", function () { calculate(1, 1, "+") })

function calculate(num1, num2, operation)
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
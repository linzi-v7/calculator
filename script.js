
let firstNumber = 0;
let firstNumberChosen = false;
let chosenOperation = " "
let secondNumber = 0;
let showResult = false;


const equalsButton = document.querySelector(".equal");
equalsButton.addEventListener("click", function ()
{
    showResult = true;

    operate(firstNumber, secondNumber, chosenOperation);

    showResult = false;
})

const digitsContainer = document.querySelector(".calculator-buttons");
digitsContainer.addEventListener("click", function (event)
{
    if (event.target.matches(".digit"))
    {
        let input = event.target.innerText;
        populateDisplay(input);
    }
    else if (event.target.matches(".delete"))
    {
        deleteFromDisplay();
    }
    else if (event.target.matches(".operator"))
    {
        //edge case:  calculator should not evaluate more than a single pair of numbers at a time
        if (chosenOperation != " " && firstNumberChosen)  
        {
            showResult = true;
            operate(firstNumber, secondNumber, chosenOperation);
            showResult = false;
            return;
        }
        chosenOperation = event.target.innerText;
        firstNumberChosen = true;
    }
    else if (event.target.matches(".clear"))
    {
        clearAll();
    }

});

function operate(num1, num2, operation)
{
    if (operation == " ")
    {
        return;
    }

    let result = 0;

    switch (operation)
    {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 == 0)
            {
                populateDisplay("seriously?");
                chosenOperation = " ";
                return;
            }
            else
            {
                result = num1 / num2;
            }
            break;

    }

    if (Number.isInteger(result))
    {
        populateDisplay(result);
    }
    else
    {
        populateDisplay(result.toFixed(2));
    }
    firstNumber = result;
    firstNumberChosen = true;
    chosenOperation = " ";

}

function populateDisplay(input)
{

    let display = document.querySelector(".calculator-display");

    if (display.innerText.includes(".") && input == ".") //to avoid having 2 decimal seperators
    {
        return;
    }

    if (display.innerText == "0" || showResult == true || firstNumberChosen == true)
    {
        display.innerText = "";
    }
    display.innerText += input;

    if (chosenOperation != " ") //if user chose operation means he chose the first number
    {
        secondNumber = Number(display.innerText);

    } else
    {
        firstNumber = Number(display.innerText);
    }
}

function deleteFromDisplay()
{
    let display = document.querySelector(".calculator-display");

    display.innerText = display.innerText.slice(0, -1)


    if (display.innerText == "") //if text is now empty
    {
        display.innerText = "0";
    }
}

function clearAll()
{
    firstNumberChosen = true; //to trigger clear
    populateDisplay(0)
    firstNumber = 0;
    firstNumberChosen = false;
    secondNumber = 0;
    chosenOperation = " ";
    showResult = false;

}


//keyboard support, can be implemented better with no code repetition. this is just a rushed feature.
document.addEventListener("keydown", function (event)
{
    const key = event.key;

    if (!isNaN(key)) //is digit
    {
        populateDisplay(key);
    }
    else if (["+", "-", "*", "/"].includes(key))
    {
        //edge case
        if (chosenOperation !== " " && firstNumberChosen)
        {
            showResult = true;
            operate(firstNumber, secondNumber, chosenOperation);
            showResult = false;
            return;
        }
        chosenOperation = key;
        firstNumberChosen = true;
    }
    else if (key === "Enter") //equals
    {
        showResult = true;
        operate(firstNumber, secondNumber, chosenOperation);
        showResult = false;
    }
    else if (key === "Escape") 
    {
        clearAll();
    }
    else if (key === "Backspace")
    {
        deleteFromDisplay();
    }
    else if (key === ".")
    {
        populateDisplay(".");

    }
});

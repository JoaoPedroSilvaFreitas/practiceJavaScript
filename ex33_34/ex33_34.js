function checkRange()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if(((number1 >= 40 && number1 <= 60) || (number1 >= 70 && number1 <= 100)) && ((number2 >= 40 && number2 <= 60) || (number2 >= 70 && number2 <= 100)))
    {
        document.getElementById("output").innerHTML = "in range";
    }else document.getElementById("output").innerHTML = "out of range";
}

function checkLargest()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if((number1 >= 40 && number1 <= 60) && (number2 >= 40 && number2 <= 60))
    {
        if(number1 == number2)
        {
            document.getElementById("output2").innerHTML = " numbers are the same";
        }else if(number1 > number2)
        {
            document.getElementById("output2").innerHTML = number1 + " is the largest";
        }else document.getElementById("output2").innerHTML = number2 + " is the largest";
    }else document.getElementById("output2").innerHTML = "out of range";
}
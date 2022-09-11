function checkEight()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if(number1 == 8 || number2 == 8)
    {
        document.getElementById("output").innerHTML = "number is 8";
    }else if(Math.abs(number1 - number2) == 8)
    {
        document.getElementById("output").innerHTML = "difference is 8";
    }else if((number1 + number2) == 8)
    {
        document.getElementById("output").innerHTML = "sum is 8";
    }else document.getElementById("output").innerHTML = "none";
}
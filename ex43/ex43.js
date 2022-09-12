function checkRightmostDigit()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;

    if(number1 < 0 || number2 < 0 || number3 < 0)
    {
       alert("only positive numbers");
    }else
    {
        if((number1 % 10 == number2 % 10) || (number1 % 10 == number3 % 10) || (number2 % 10 == number3 % 10))
        {
            document.getElementById("output").innerHTML = "same rightmost digit";
        }else document.getElementById("output").innerHTML = "rightmost digists are different";
    }
}
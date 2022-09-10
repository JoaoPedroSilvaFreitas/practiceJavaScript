function checkLargest()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var max = number1;

    if(parseInt(number2) >= parseInt(max))
    {
        max = number2;
    }
    if(parseInt(number3) >= parseInt(max))
    {
        max = number3;
    }

    document.getElementById("output").innerHTML = max + " is the largest number";

}
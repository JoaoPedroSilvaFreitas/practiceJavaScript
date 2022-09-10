function near100()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if(Math.abs(100 - parseInt(number1)) < Math.abs(100 - parseInt(number2)))
    {
        document.getElementById("output").innerHTML = number1 + " is near 100";
    }else if(Math.abs(100 - parseInt(number1)) == Math.abs(100 - parseInt(number2)))
    {
        document.getElementById("output").innerHTML = number1 + " and " + number2 + " are near 100";
    }else document.getElementById("output").innerHTML = number2 + " is near 100";
}
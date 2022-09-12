function checkNumber()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;

    /*number1 = parseInt(number1);
    number2 = parseInt(number2);
    number3 = parseInt(number3);*/

    if((number1 == number2) && (number1 == number3))
    {
        document.getElementById("output").innerHTML = "30";
    }else if((number1 == number2) || (number1 == number3) || (number2 == number3))
    {
        document.getElementById("output").innerHTML = "40";
    }else document.getElementById("output").innerHTML = "20";

}
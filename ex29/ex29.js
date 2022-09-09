function checkNumberRange()
{
    var number1 = document.getElementById("first number").value;
    var number2 = document.getElementById("second number").value;
    var number3 = document.getElementById("third number").value;
    if((number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99) || (number3 >= 50 && number3 <= 99))
    {
        document.getElementById("output").innerHTML = " in range";
    }else document.getElementById("output").innerHTML = " out of range";
}
/* usar o resto da divisao por 10 tbm funciona*/

function checkLastDigit()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    
    toString(number1);
    toString(number2);
    toString(number3);

    if(number1[number1.length-1] == number2[number2.length-1] && number1[number1.length-1] == number3[number3.length-1])
    {
        document.getElementById("output").innerHTML = "last digit is the same";
    }else document.getElementById("output").innerHTML = "last digit is not the same";
    

}
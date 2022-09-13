function check()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if(number1 < 0 || number2 < 0)
    {
        alert("Only positive numbers!");
    }else
    {
        if (!((number1 % 7 == 0 || number1 % 11 == 0) && (number2 % 7 == 0 || number2 % 11 == 0)))
        {
            if((number1 % 7 == 0 || number1 % 11 == 0) || (number2 % 7 == 0 || number2 % 11 == 0))
            {
                document.getElementById("output").innerHTML = "number is multiple of 7 or 11";
            }else document.getElementById("output").innerHTML = "number is not multiple of 7 or 11";
        }else document.getElementById("output").innerHTML = "both numbers are multiple of 7 or 11";

    }
}
function untilInteger()
{
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    while(x % y == 0)
    {
        if(y == 1)
        {
            break;
        }
        x = x / y;
    }

    document.getElementById("output").innerHTML = x;
}
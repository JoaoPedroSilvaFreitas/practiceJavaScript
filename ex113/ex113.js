function divide()
{
    var number = parseInt(document.getElementById("number").value);
    var output = parseInt(number);
    var divisor = 1;

    /*
    while (number > 0) 
    {
        output += number;
        number = Math.floor(number / 2);
    }*/

    while(true)
    {
        divisor *= 2;
        if(divisor > number)
        {
            break;
        }else output += Math.floor(number / divisor);
    }

    document.getElementById("output").innerHTML = output;
}

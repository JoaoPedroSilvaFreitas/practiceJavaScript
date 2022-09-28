function checkDigits()
{
    var number = document.getElementById("number").value;
    var aux = 0;

    number = number.split("");

    aux = parseInt(number[0]);

    for(i = 1; i < number.length; i++)
    {
        if(parseInt(number[i]) > aux)
        {
            aux = parseInt(number[i]);
        }else
        {
            document.getElementById("output").innerHTML = "is not increasing";
            return;
        }
    }

    document.getElementById("output").innerHTML = "is increasing";
}

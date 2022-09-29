function evenDigits()
{
    let number = document.getElementById("number").value;
    let cont = 0;

    number = number.toString().split("");

    for(i = 0; i < number.length; i++)
    {
        if(parseInt(number[i]) % 2 == 0)
        {
            cont++;
        }
    }
    document.getElementById("output").innerHTML = cont;
}



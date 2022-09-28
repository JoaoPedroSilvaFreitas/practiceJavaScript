function replaceHash()
{
    var number = document.getElementById("number").value;
    var pos = -1;
    var aux;
    var output = [];

    for(i = 0; i < number.length; i++)
    {
        if(number[i] == "*")
        {
            pos = i;
        }else if(parseInt(number[i]) / 1 != parseInt(number[i]))
        {
            alert("Type a number with * to replace");
            return;
        }
    }

    if(pos != -1)
    {
        number = number.split("");

        for(i = 0; i < 10; i++)
        {
            number[pos] = i;

            aux = parseInt(number.join(""));
            if(aux % 3 == 0)
            {
                output.push(aux);
            }
        }

        document.getElementById("output").innerHTML = output;
    }else document.getElementById("output").innerHTML = number;

    
}

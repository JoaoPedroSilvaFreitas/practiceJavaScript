function removeDigitMaxNumber()
{
    var x = document.getElementById("number").value;
    var max = -Infinity;
    var array = [];
    var aux = 0;
    
    array = x.toString().split("");

    for(i = 0; i < array.length; i++)
    {
        aux = 0;
        for(j = 0; j < array.length; j++)
        {
            if(j != i)
            {
                aux += array[j];
            }
        }

        aux = parseInt(aux);
        
        if(aux > max)
        {
            max = aux;
        }
    }

    document.getElementById("output").innerHTML = max;
}

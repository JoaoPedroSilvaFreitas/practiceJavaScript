function prefixSum()
{
    let prefix = [];
    let aux;

    for(i = 0; i < array.length; i++)
    {
        aux = 0;
        for(j = 0; j < i+1; j++)
        {
            aux += array[j];
        }
        prefix.push(aux);
    }
    document.getElementById("output").innerHTML = prefix;
}

function addToArray()
{
    let number = parseInt(document.getElementById("number").value);
    array.push(number);
}

var array = [];

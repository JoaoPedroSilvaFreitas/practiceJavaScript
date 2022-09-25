function sortPairs()
{
    var output = [];
    for(i = 0; i < array.length; i++)
    {
        for(j = 0; j < array.length; j++)
        {
            if(array[i] % array[j] == 0 && array[i] != array[j])
            {
                let aux = [];
                aux.push(array[i]);
                aux.push(array[j]);
                output.push(aux);
            }
        }
    }
    document.getElementById("output").innerHTML = "";

    for(i = 0; i < output.length; i++)
    {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "[" + output[i][0] + "," + output[i][1] + "]";
    }
}

function addToArray()
{
    var x = document.getElementById("number").value;
    array.push(x);
}

function cleanArray()
{
    array = [];
}

var array = [];

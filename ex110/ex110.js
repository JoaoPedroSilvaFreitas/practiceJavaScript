function sortEven()
{
    var range = document.getElementById("range").value;
    var cont = 0;

    for(i = 0; i < range; i++)
    {
        if(array[i] % 2 == 0)
        {
            cont++;
        }
    }

    document.getElementById("output").innerHTML = cont;
}

function addToArray()
{
    var x = parseInt(document.getElementById("number").value);
    array.push(x);
}

function cleanArray()
{
    array = [];
}

var array = [];

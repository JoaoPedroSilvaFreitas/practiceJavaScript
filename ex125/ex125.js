function checkPoint()
{
    let aux = -Infinity;
    let pos = 0;

    for(i = 0; i < array.length; i++)
    {
        if(array[i].length > aux)
        {
            aux = array[i].length;
            pos = i;
        }
    }
    document.getElementById("output").innerHTML = array[pos];
}

function addToArray()
{
    let str = document.getElementById("string").value;
    array.push(str);
}

var array = [];

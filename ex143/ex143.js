function sortByLength()
{
    let aux = "";
    for(i = 0; i < array.length; i++)
    {
        for(j = array.length-1; j > i; j--)
        {
            if(array[i].length > array[j].length)
            {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
                break;
            }
        }
    }

    document.getElementById("output").innerHTML = array;
}

function addToArray()
{
    let str = document.getElementById("string").value;
    array.push(str);
}

var array = [];


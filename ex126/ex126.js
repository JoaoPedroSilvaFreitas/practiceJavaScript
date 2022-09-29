function largestEven()
{
    let max = -Infinity;

    for(i = 0; i < array.length; i++)
    {
        if(array[i] > max && array[i] % 2 == 0)
        {
            max = array[i];
        }
    }
    document.getElementById("output").innerHTML = max;
}


function addToArray()
{
    let number = parseInt(document.getElementById("number").value);
    array.push(number);
}

var array = [];

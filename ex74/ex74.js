function findLarger()
{
    var max = -Infinity;
    var array = []
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;

    array.push(parseInt(x));
    array.push(parseInt(y));
    array.push(parseInt(z));

    for(i = 0; i < array.length; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }
    }

    for(i = 0; i < array.length; i++)
    {
        array[i] = max;
    }

    document.getElementById("output").innerHTML = array[1] + ", " + array[2] + ", " + array[0];
}
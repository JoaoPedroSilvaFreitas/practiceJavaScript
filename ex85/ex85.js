function divideInto2Parts()
{
    //Poderia ter feito isso em um for só...
    var array1 = [];
    var array2 = [];
    var output = [0,0];
    var x = document.getElementById("number1").value;

    x = x.toString().split("");

    for(i = 0; i < x.length; i++)
    {
        if(i % 2 == 0)
        {
            array1.push(parseInt(x[i]));
        }else array2.push(parseInt(x[i]));
    }

    for(i = 0; i < array1.length; i++)
    {
        output[0] += array1[i];
    }

    for(i = 0; i < array2.length; i++)
    {
        output[1] += array2[i];
    }

    document.getElementById("output").innerHTML = output[0] + ", " + output[1];
}
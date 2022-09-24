function findClosestDifference()
{
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;
    var x = document.getElementById("number").value;
    var max = -Infinity;
    var array = [];
    var aux = 0;
    

    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));
    array.push(parseInt(d));
    array.push(parseInt(e));
    array.push(parseInt(f));

    for(i = 0; i < array.length; i++)
    {
        for(j = i; j < array.length; j++)
        {
            aux = Math.abs(array[i] - array[j]);
            if(aux < parseInt(x) && aux > max)
            {
                max = aux;
            }
        }
    }

    document.getElementById("output").innerHTML = max;
}
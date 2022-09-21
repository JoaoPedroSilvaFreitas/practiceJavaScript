function findLargest()
{
    var max = -Infinity;
    var maxId = 0;
    var array = [];
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;
    var g = document.getElementById("number7").value;
    var h = document.getElementById("number8").value;

    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));
    array.push(parseInt(d));
    array.push(parseInt(e));
    array.push(parseInt(f));
    array.push(parseInt(g));
    array.push(parseInt(h));

    for(i = 0; i < array.length; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
            maxId = i;
        }
    }


    document.getElementById("output").innerHTML = "number is the " + maxId + " position is the largest";
}
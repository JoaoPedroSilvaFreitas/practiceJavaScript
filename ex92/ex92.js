function findLargestDifference()
{
    var max = -Infinity;
    var array = [];
    var sub = 0;
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;

    array.push(parseInt(a));
    array.push(parseInt(b));
    array.push(parseInt(c));
    array.push(parseInt(d));
    array.push(parseInt(e));
    array.push(parseInt(f));

    for(i = 0; i < array.length; i++)
    {
        sub = Math.abs(array[i] - array[i+1]);
		if(sub > max)
        {
            max = sub;
        }
    }

    document.getElementById("output").innerHTML = "biggest difference is " + max;
}
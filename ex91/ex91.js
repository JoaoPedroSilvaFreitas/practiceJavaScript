function findLargestSum()
{
    var max = -Infinity;
    var array = [];
    var sum = 0;
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;
    var k = document.getElementById("k").value;

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
            sum += array[j]
            if(j == i+(k-1) || j == array.length-1)
            {
                if(sum > max)
                {
                    max = sum;
                }
               break;
            }
        }
        sum = 0;
    }




    document.getElementById("output").innerHTML = "biggest sum is " + max;
}
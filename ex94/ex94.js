function findMostFrequent()
{
    var max = -Infinity;
    var rate = [];
    var array = [];
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    var d = document.getElementById("number4").value;
    var e = document.getElementById("number5").value;
    var f = document.getElementById("number6").value;

    array.push(parseInt(a));
    rate.push(0);
    array.push(parseInt(b));
    rate.push(0);
    array.push(parseInt(c));
    rate.push(0);
    array.push(parseInt(d));
    rate.push(0);
    array.push(parseInt(e));
    rate.push(0);
    array.push(parseInt(f));
    rate.push(0);

    for(i = 0; i < array.length; i++)
    {
        for(j = 0; j < array.length; j++)
        {
            if(array[i] == array[j])
            {
                rate[i]++;
            }
        }
    }

    for(i = 0; i < rate.length; i++)
    {
        if(rate[i] > max)
        {
            max = array[i];
        }
    }


    document.getElementById("output").innerHTML = max + " is the most frequent number";
}
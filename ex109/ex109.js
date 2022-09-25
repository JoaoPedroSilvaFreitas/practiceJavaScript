function sortPrime()
{
    var range = document.getElementById("number").value;
    var array = [];
    var cont  = 0;

    for(i = 0; i <= range; i++)
    {
        cont = 0;

        for(j = 1; j < range; j++)
        {
            if(i % j == 0)
            {
                cont++
            }
        }

        if(cont <= 2 && i != 1)
        {
            array.push(i);
        }
    }

    document.getElementById("output").innerHTML = "";
    for(i = 0; i < array.length; i++)
    {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "   " + array[i];
    }
}

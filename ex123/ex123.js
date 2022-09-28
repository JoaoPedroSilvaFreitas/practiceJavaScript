function check()
{
    var range = parseInt(document.getElementById("range").value);
    var output = [];

    for(i = 0; i < array.length; i++)
    {
        for(j = 1; j < range+1; j++)
        {
            if(array[i] == j)
            {
                output.push(array[i]);
            }
        }
    }

    if(output.length == range)
    {
        document.getElementById("output").innerHTML = "True";
    }else document.getElementById("output").innerHTML = "False";

}

function addToArray()
{
    let x = parseInt(document.getElementById("number").value);
    array.push(x);
}

var array = [];
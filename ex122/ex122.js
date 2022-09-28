function checkSequence()
{
    var aux = -Infinity;
    if(array.length > 0)
    {
        for(i = 0; i < array.length; i++)
        {
            if(array[i] > aux)
            {
                aux = array[i]
            }
        }

        if(aux == array[array.length-1])
        {
            document.getElementById("output").innerHTML = "increasing";
            return;
        }else
        {
            var aux = Infinity;
            for(i = 0; i < array.length; i++)
            {
                if(array[i] < aux)
                {
                    aux = array[i]
                }
            }

            if(aux == array[array.length-1])
            {
                document.getElementById("output").innerHTML = "decreasing";
                return;
            }
        }

        document.getElementById("output").innerHTML = "neither";

    }else alert("empty array");
    
}

function addToArray()
{
    let x = parseInt(document.getElementById("number").value);
    array.push(x);
}

var array = [];


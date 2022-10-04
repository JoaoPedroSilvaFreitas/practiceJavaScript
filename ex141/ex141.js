function check()
{
    let cont = 0;

    for(i = 0; i < array1.length; i++)
    {
        for(j = 0; j < array2.length; j++)
        {
            if(array1[i] == array2[j])
            {
                cont++;
                break;
            }
        }
    }

    document.getElementById("output").innerHTML = cont;
}

function addToArray1()
{
    let number = document.getElementById("number1").value;
    array1.push(number);
}

function addToArray2()
{
    let number = document.getElementById("number2").value;
    array2.push(number);
}

var array1 = [];
var array2 = [];
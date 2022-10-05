function splitHalf()//Ta muito mal feito...
{
    if(array.length % 2 == 0)
    {
        let half = array.length/2;
        let array1 = [];
        let array2 = [];
        let output = [];

        for(i = 0; i < array.length; i++)
        {
            if(i >= half)
            {
                array2.push(array[i]);
            }else array1.push(array[i]);
        }

        for(i = 0; i < array2.length; i++)
        {
            output.push(array2[i]);
        }

        for(i = 0; i < array1.length; i++)
        {
            output.push(array1[i]);
        }

        document.getElementById("output").innerHTML = output;

    }else alert("array length must be even");
    
}

function addToArray()
{
    let number = document.getElementById("number").value;
    array.push(number);
}

var array = [];


/*SOLUÇÃO DO SITE
function halv_array_swap(iarra) 
{
    if (((iarra.length)%2)!=0)
    {
        return false;
    }

    for (let i = 0; i < iarra.length / 2; i++) 
    {
        const tmp = iarra[i];
        iarra[i] = iarra[i + iarra.length / 2];
        iarra[i + iarra.length / 2] = tmp;
    }
    return iarra;
}

*/
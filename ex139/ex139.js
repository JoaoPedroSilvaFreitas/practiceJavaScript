function roundNumber()
{
    let rightmost = 0;
	for (i = 0; i < array.length; i++) 
    {
        if(array[i].toString()[array[i].length-1] == "0")//array[i] % 10 === 0
        {
            rightmost = i;
        }
	}

    document.getElementById("output").innerHTML = array[rightmost];
}

function addToArray()
{
    let number = document.getElementById("number").value;
    array.push(number);
}

var array = [];


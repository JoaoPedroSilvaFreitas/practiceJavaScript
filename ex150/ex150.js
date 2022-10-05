function swapAdjacent()
{
    let number = document.getElementById("number").value;
    let aux = "";
    number = number.toString().split("");

    if(number.length % 2 == 0)
    {
        for(i = 0; i < number.length; i+=2)
        {
            aux = number[i];
            number[i] = number[i+1];
            number[i+1] = aux;
        }

        document.getElementById("output").innerHTML = number.join("");

    }else alert("integer length must be even!");

    
}

/*SOLUÇÃO DO SITE
function swap_adjacent_digits(n)
{
    if (n.toString().length%2!=0)
    {
    return false;
    }
    var result = 0,
	x = 1;

	while (n != 0) 
    {
		var dg1 = n % 10,
			dg2 = ((n - dg1) / 10) % 10;
		result += x * (10 * dg1 + dg2);
		n = Math.floor(n / 100);
		x *= 100;
	}
	return result;
}
*/

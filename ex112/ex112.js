function traillingZeros()
{
    var number = document.getElementById("number").value;
    var array = [];
    var factorial = 1;
    var zeros = 0;

    for(i = number; i > 0; i--)
    {
        factorial *= i;
    }

    console.log(factorial);

    array = factorial.toString().split("");

    for(i = 0; i < array.length; i++)
    {
        if(array[i] == "0")
        {
            zeros++;
        }else zeros = 0;
    }

    document.getElementById("output").innerHTML = "trailling zeros: " + zeros;
}

/*SOLUÇÃO DO SITE
function trailing_zeros_factorial(n) 
{
    var result = 0;
    for (var i = 5; i <= n; i += 5) 
    {
        var num = i;
        while (num % 5 === 0) 
        {
            num /= 5;
            result++;
        }
    }
    return result;
}
*/

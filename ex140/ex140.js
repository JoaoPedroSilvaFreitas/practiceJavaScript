function checkDigits()
{
    let number = document.getElementById("number").value;
    number = number.toString().split("");

    let aux = number[0];

    for(i = 0; i < number.length; i++)
    {
        if(number[i] != aux)
        {
            document.getElementById("output").innerHTML = "digits are different";
            return;
        }
    }

    document.getElementById("output").innerHTML = "digits are the same";
}

/* SOLUÇÃO DO SITE

function test_same_digit(num) 
{
    var first = num % 10;
    while (num) 
    {
        if (num % 10 !== first)
        {
            return false;
        } 
        num = Math.floor(num / 10);
    }
    return true
}
*/

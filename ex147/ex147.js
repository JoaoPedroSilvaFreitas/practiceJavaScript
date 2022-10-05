function sumDigits()
{
    let string = document.getElementById("string").value;
    let sum = 0;

    string = string.split("");

    for(i = 0; i < string.length; i++)
    {
        if(string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57)
        {
            sum += parseInt(string[i]);
        }
    }

    document.getElementById("output").innerHTML = sum;
}

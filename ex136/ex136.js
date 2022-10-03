function replaceDigit()
{
    let str = document.getElementById("string").value;
    str = str.split("");

    for(i = 0; i < str.length; i++)
    {
        if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57)
        {
            str[i] = "$";
            break;
        }
    }

    document.getElementById("output").innerHTML = str.join("");
}



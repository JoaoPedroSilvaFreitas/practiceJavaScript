function removeChars()
{
    let str = document.getElementById("string").value;
    let output = [];
    let replace = false;
    str = str.split("");

    for(i = 0; i < str.length; i++)
    {
        replace = false;
        for(j = 0; j < str.length; j++)
        {
            if(j != i && str[i] == str[j])
            {
                replace = true;
            }
        }
        if(!replace)
        {
            output.push(str[i]);
        }
    }

    document.getElementById("output").innerHTML = output.join("");
}



function changeCap()
{
    let string = document.getElementById("string").value;
    string = string.split("");

    for(i = 0; i < string.length; i++)
    {
        if(string[i] == string[i].toUpperCase())
        {
            string[i] = string[i].toLowerCase()
        }else string[i] = string[i].toUpperCase()
    }

    document.getElementById("output").innerHTML = string.join("");
}

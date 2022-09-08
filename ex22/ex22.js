function removeChar()
{
    var str = document.getElementById("string").value;
    var pos = document.getElementById("position").value;

    

    if((pos > str.length) || (pos < 0))
    {
        alert("position bigger or lesser than string size")
    }else
    {
        /*OBS perdi muito tempo nisso aqui pq aparentemente o pos no segundo substring,
        sem o parseInt() tava retornando undefined so funcionou com o parseInt(), mas no primeiro nao deu problema
        vai entender pq né...*/
        str = (str.substring(0, pos) + str.substring(parseInt(pos) + 1, str.length));
        document.getElementById("output").innerHTML = str;
    }

}
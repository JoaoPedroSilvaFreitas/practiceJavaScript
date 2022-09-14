function checkPandT()
{
    var str = document.getElementById("string").value;

    var p = 0;
    var t = 0;

    for(i = 0; i < str.length;i++)
    {
        if(str[i] == 'p' || str[i] == 'P')
        p++;

        if(str[i] == 't' || str[i] == 'T')
        t++;
    }

    if(p == t)
    {
        document.getElementById("output").innerHTML = "same amount of p`s and t`s";
    }else document.getElementById("output").innerHTML = "different amount of p`s and t`s";


/*
    Solução do site usando alguns metodos do javaScript

    var str_p = str.replace(/[^p]/g, "");

    var str_t = str.replace(/[^t]/g, "");

    var p_num = str_p.length;
    var s_num = str_t.length;

    return p_num === s_num;
*/

}
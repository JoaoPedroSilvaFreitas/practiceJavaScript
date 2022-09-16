function sizeString()
{
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;

    if(str1.length != str2.length)
    {   
        if(str1.length > str2.length)
        {
            document.getElementById("output").innerHTML = str1.substring(0,str2.length) + str2;
        }else document.getElementById("output").innerHTML = str1 + str2.substring(0,str1.length);
    }
    else document.getElementById("output").innerHTML = str1 + str2;

    /*
    Solução do site usando Math.min(), provavelmente uma função que retorna o menor valor;

    const m = Math.min(str1.length, str2.length);

    return str1.substring(str1.length - m) + str2.substring(str2.length - m);

    */


}
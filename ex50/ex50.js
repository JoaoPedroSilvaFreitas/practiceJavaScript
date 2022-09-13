/*RELEMBRANDO COMO STRINGS EM JAVA SCRIPT SÃO IMUTAVEIS FOI PRECISO "CRIAR" UMA NOVA*/

function capChar()
{
    var str = document.getElementById("string").value;
    var strAux = str.split(" ");
    str = "";
    for(i = 0; i < strAux.length; i++)
    {
        strAux[i] = strAux[i].charAt(0).toUpperCase() + strAux[i].substring(1,strAux[i].length);
        //strAux[i].charAt(0).toUpperCase() == str[i][0].toUpperCase() desse jeito tbm funciona
    }
    
    str = strAux.join(" ");

    document.getElementById("output").innerHTML = str;
}
/*OBS: strings em javaScript são "imutaveis" ou seja,
não posso alterar um caracter dela, tenho que criar uma string
nova*/

function reverseString()
{
    var str = document.getElementById("string").value;
    var j = str.length-1;
    var aux = "";
    strAux = str.split("");//isso aqui divide a string em uma array de char
    str = "";
    
    for(i = 0; i < j; i++)
    {
        aux = strAux[i];
        strAux[i] = strAux[j];
        strAux[j] = aux;
        j--;
    }

    for(i = 0; i < strAux.length; i++)
    {
        str = str + strAux[i];
    }

    document.getElementById("output").innerHTML = str;
}
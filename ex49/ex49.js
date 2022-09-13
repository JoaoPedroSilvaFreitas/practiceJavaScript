function replaceChar()
{
    var str = document.getElementById("string").value;
    strAux = str.split("");
    for(i = 0; i < str.length; i++)
    {
        switch(strAux[i]) 
        {
            case ' ':
                break;

            case 'z':
                strAux[i] = 'a';
                break;

            case 'Z': 
                strAux[i] = 'A';
                break;

            default:
                strAux[i] = String.fromCharCode(1 + strAux[i].charCodeAt(0));
        }

        switch(strAux[i]) 
        {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                strAux[i] = strAux[i].toUpperCase();
        }
    }
    str = strAux.join('');
    document.getElementById("output").innerHTML = str;
}
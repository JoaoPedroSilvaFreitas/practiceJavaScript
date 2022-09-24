function untilOneDigit()
{
    var x = document.getElementById("number").value;
    var array = [];
    var aux = 0;
    var cont = 0;
    array = x.toString().split("");

    while(array.length > 1)
    {
        aux = 0;
        for(i = 0; i < array.length;i++)
        {
            aux += parseInt(array[i]);
        }
        console.log(aux);
        array = aux.toString().split("");
        cont++;
    }

    document.getElementById("output").innerHTML = cont + " : " + aux;
}
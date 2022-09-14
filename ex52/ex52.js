function toAlphabetical()
{
    //tbm pode ser escrito em uma linha só (sem criar novas variaveis) str.split("").sort().join("");

    var str = document.getElementById("string").value;

    var strAux = str.split("");

    strAux.sort(); //.sort() usa o insertion sort como metodo de ordenação

    str = strAux.join("");

    document.getElementById("output").innerHTML = str;
}
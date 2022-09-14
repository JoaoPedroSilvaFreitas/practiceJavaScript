function check()
{
    //Essa função .test() procura um determinado padrão em uma string, no caso o padrão foi deteminado por
    // /padrão/ padrão = a...b sendo os 3 pontos quiasquer caracteres (cada ponto representando um char)
    var str = document.getElementById("string").value;

    if((/a...b/).test(str) || (/b...a/).test(str))
    {
        document.getElementById("output").innerHTML = "pattern found";
    }else document.getElementById("output").innerHTML = "pattern not found";

}
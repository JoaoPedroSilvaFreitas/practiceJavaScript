function copyString()
{

    //bom pelo visto existem uma função str.repeat(n) onde str seria minha string e n a quantidade de vezes

    var string = document.getElementById("string").value;
    var number = document.getElementById("number").value;
    var stringAux = "";

    if(number > 0)
    {
        for(i = 0; i < number; i++)
        {
            stringAux = stringAux + string;
        }

        document.getElementById("output").innerHTML = stringAux;
    }else alert("number must be greater than 0");

    

    

}
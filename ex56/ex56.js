function divide()
{
    //esse exercicio nao fez o menor sentido... pelo menos agora eu sei que existe um .round() em js
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if(number1 < 0 || number2 < 0)
    {
        alert("Only positive numbers!");
    }else
    {
        var div = Math.round(number1 / number2).toString(),
        result_array = div.split("");

        if (div >= 1000)
        {
            for (var i = div.length - 3; i > 0; i -= 3) 
            {
                result_array.splice(i, 0, ",");
            }
        }

        document.getElementById("output").innerHTML = result_array;
    }

    
}
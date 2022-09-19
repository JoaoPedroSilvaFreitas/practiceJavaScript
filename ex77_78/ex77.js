function find1or3()
{
    var array = [];
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    array.push(parseInt(x));
    array.push(parseInt(y));

    for(i = 0; i < array.length;i++)
    {
        if(array[i] == 1 || array[i] == 3)
        {
            document.getElementById("output").innerHTML = "array contains 1 or 3";
            return;
        }
    }

    document.getElementById("output").innerHTML = "array do not contains 1 or 3";

    // solução do site usando indexOf() if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1)
    // para o ex78 (nums.indexOf(1) == -1 && nums.indexOf(3) == -1)
    
}
function check()
{
    var numbers = [];
    numbers.push(document.getElementById("number1").value);
    numbers.push(document.getElementById("number2").value);
    numbers.push(document.getElementById("number3").value);

    var output = "";

    for(i = 0; i < numbers.length; i++)
    {
        if(numbers[i] >= 20)
        {
            for(j = 0; j < numbers.length; j++)
            {
                if(numbers[i] < numbers[j])
                {
                    output = output + " " + numbers[i];
                }
            }
        }
    }

    document.getElementById("output").innerHTML = output + " greater than 20 and lesser than other numbers";

}
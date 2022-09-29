function roundNumber()
{
    let number = parseInt(document.getElementById("number").value);

    while (number % 10) 
    {
        number++;
    }
    document.getElementById("output").innerHTML = number;
}


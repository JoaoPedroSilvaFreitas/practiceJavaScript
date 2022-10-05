function sumOfCubes()
{
    let number = parseInt(document.getElementById("number").value);
    let sum = 0;
    for(i = 1; i < number+1; i++)
    {
        sum += (i*i*i);
    }

    document.getElementById("output").innerHTML = sum;
}

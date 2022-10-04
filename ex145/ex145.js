function findLargestN()
{
    let number = document.getElementById("number").value;
    let n = 0;
    let cont = 1;

    while(true)
    {
        n += cont;
        cont++;
        if(n + cont > number)
        {
            cont--;
            break;
        }
    }

    document.getElementById("output").innerHTML = cont;
}

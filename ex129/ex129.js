function findGreaterPrime()
{
    let number = parseInt(document.getElementById("number").value);
    let prime = number;

    while(true)
    {
        if(prime > number && checkPrime(prime))
        {
            break;
        }
        prime++;
    }

    document.getElementById("output").innerHTML = prime;
}

function checkPrime(number)
{
    for(i = 2; i < number; i++)
    {
        if(number % i == 0)
        {
            return false;
        }
    }

    return true;
}


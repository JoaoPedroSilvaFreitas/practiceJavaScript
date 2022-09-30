function primeDigits()
{
    let number = parseInt(document.getElementById("number").value);
    const result = [];

    for (let i = 2; i <= number; i++)
    {
      while (is_prime(i) && number % i === 0) 
      {
        if (!result.includes(i))
        {
            result.push(i);
        } 
        number /= i;
      }
    }
    document.getElementById("output").innerHTML = result;
}

function is_prime(number) 
{
    for (let i = 2; i <= Math.sqrt(number); i++)
    {
        if (number % i === 0)
        {
            return false;
        } 
    }
    return true;
}



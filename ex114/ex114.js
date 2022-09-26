function is_correct()
{
    var str = document.getElementById("string").value;

    // Jeito interessante de verificar se é maiuscula:    /[A-Z]/.test(str[0])
    if(str[0] == str[0].toUpperCase() && str[str.length-1] == ".")
    {
        document.getElementById("output").innerHTML = "is correct";
    }else document.getElementById("output").innerHTML = "is wrong";

    
}
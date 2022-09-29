function revertBinary()
{
    let number = parseInt(document.getElementById("number").value);
    let binary = dec2bin(number);
    let aux = "";

    binary = binary.split("");
    j = binary.length-1;

    for(i = 0; i < binary.length; i++)
    {
        if(j < i)
        {
            break;
        }
            
        aux = binary[i];
        binary[i] = binary[j];
        binary[j] = aux;

        j--;
    }

    document.getElementById("output").innerHTML = number + "->" + binary.join("") + "->" + parseInt(binary.join(""), 2);
}

function dec2bin(dec) //Função roubada https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
{
    return (dec >>> 0).toString(2);
}

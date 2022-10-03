function reverseBits()
{
    let number = document.getElementById("number").value;
    var output = 0;
	for (var i = 0; i < 16; i++) 
    {
		output = output * 2 + (number % 2);
		number = Math.floor(number / 2);
	}

    document.getElementById("output").innerHTML = output;
}
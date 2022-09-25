function dotProduct()
{
    var dotProduct = 0;

    var x1 = parseInt(document.getElementById("x1").value);
    var y1 = parseInt(document.getElementById("y1").value);
    var z1 = parseInt(document.getElementById("z1").value);

    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);
    var z2 = parseInt(document.getElementById("z2").value);

    dotProduct = x1*x2 + y1*y2 + z1*z2;

    document.getElementById("output").innerHTML = dotProduct;
}
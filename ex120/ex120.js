function checkPoint()
{
        var x_center = parseInt(document.getElementById("x_center").value);
        var y_center = parseInt(document.getElementById("y_center").value);
        var radius = parseInt(document.getElementById("radius").value);
        var x_point = parseInt(document.getElementById("x_point").value);
        var y_point = parseInt(document.getElementById("y_point").value);

        if((x_point > x_center - radius && x_point < x_center + radius) && (y_point > y_center - radius && y_point < y_center + radius))
        {
            document.getElementById("output").innerHTML = "inside";
        }else document.getElementById("output").innerHTML = "outside";
}

/*
SOLUÇÃO DO SITE
function check_a_point(a, b, x, y, r) 
{
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) 
    {
        return true;
    }
    return false;
}
*/

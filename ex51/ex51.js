function toHoursMinutes()
{
    var number = document.getElementById("number").value;

    var hours = number / 60;
    var minutes = number % 60;

    document.getElementById("output").innerHTML = parseInt(hours) + " h : " + minutes + " min";

}
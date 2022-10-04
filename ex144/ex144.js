function breakURL()
{
    let url = document.getElementById("url").value;
    url = url.split("://");
    let array = ["",""]
    
    array[0] = url[0];
    array[1] = url[1].split("/");

    document.getElementById("output").innerHTML = array;
}

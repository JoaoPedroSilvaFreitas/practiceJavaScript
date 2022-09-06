function getFileExtention()
{
    var fileName = document.getElementById("fileName").value;
    var extention = fileName.split('.').pop();
    console.log(extention);
}
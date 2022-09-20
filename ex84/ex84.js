function replaceChar()
{
    var x = document.getElementById("string").value;
    var array = x.split("");

    for(i = 0; i < array.length;i++)
    {
        array[i] = String.fromCharCode(array[i].charCodeAt(0) + 1);
    }

    x = array.join("");

    document.getElementById("output").innerHTML = x;

    /*SOLUÇÃO DO SITE
    {
        var all_chars = str.split("");

        for(var i = 0; i < all_chars.length; i++) 
        {
            var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
            n = (n + 1) % 26; 
            all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
        }

        return all_chars.join("");
    } 
    */
}
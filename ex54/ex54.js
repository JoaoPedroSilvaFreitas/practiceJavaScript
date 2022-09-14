function numberOfVowels()
{
    var str = document.getElementById("string").value;
    var vowels = 0;

    for(i = 0; i < str.length; i++)
    {
        if((str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') ||
        (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'))
        {
            vowels++;
        }
    }

    document.getElementById("output").innerHTML = "vowels: " + vowels;
    
    /*
        Solução do site usando .replace()

        return str.replace(/[^aeiou]/g, "").length;

    */

}
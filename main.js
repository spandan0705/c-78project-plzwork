var images =
["me.jpg",
"mummy.jpg",
"papa.jpg"]

var names =
["Spandan Deshbhratar",
 "Prajakta Deshbhratar",
 "Prasenjit Deshbhratar"]

 var i = 0;

 function update()
 {
    i++;
    var numbers_of_family_members_in_array = 3
    if(i > numbers_of_family_members_in_array)
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedname = names[i];
    document.getElementById("family_members_image").src=updatedImage;
    document.getElementById("family_members_name").innerHTML = updatedname;
}
function addUser()
{
    user_name = document.getElementById("user_name").value;
    if(user_name != "")
    {
        localStorage.setItem("user_name", user_name);
        window.location = "LetsChat_room.html";
    }
}
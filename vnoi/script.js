function signIn(){
    var t = prompt("Name (in VNOI)")
    if(t == null || t == ""){
        t = "null"
    }
    localStorage.setItem("Name", t)
    name__ = localStorage.getItem("Name")
    location.reload()
}

function logOut(){
    if(name__ != null && name__ != "null"){
        var tf = confirm("Are you sủa???")
        if(tf){
            localStorage.removeItem("Name")
            location.reload()
        }
    }
}

name__ = localStorage.getItem("Name")
// if(name__ == null){
//     signIn()
// }
if(name__ != null && name__ != "null"){
    Name__ = document.getElementById("name__")
    login_ = document.getElementById("login")
    link_ = document.getElementById("link_")
    Name__.innerHTML = name__
    login_.onclick = ""
    link_.href = "https://oj.vnoi.info/user/" + name__
}

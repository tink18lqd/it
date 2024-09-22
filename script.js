linkOfVNOI = "https://oj.vnoi.info/problem/"

nameOf = [
    "34 đồng xu",
    "HBT1D",
    "Quảng cáo",
    "Số phong phú",
    "Knapsack 1",
    "CUBE",
    "Đường đi có tổng lớn nhất",
    "A cộng B",
    "Dãy con tăng dài nhất (bản dễ)",
    "MULTAB",
    "DESERT",
    "I WANT",
    "Gửi thư",
    "Tìm TPLT mạnh"
]

idOf = [
    "coin34",
    "hbt1d",
    "ads",
    "nkabd",
    "atcoder_dp_d",
    "fc139_cube",
    "qbmax",
    "post",
    "liq",
    "fcb026_multab",
    "fcb037_desert",
    "bedao_t1_iwant",
    "nkletter",
    "tjalg"
]

Random_ = []
if(localStorage.getItem("randomAssignment") != null && localStorage.getItem("randomAssignment").length != 0){
    Random_ = JSON.parse(localStorage.getItem("randomAssignment"))
}

console.log(Random_.length)

function randomNNumber(len, n, tf){
    if(tf == false){
        for(i = 0; Random_.length < n; i++){
            var a = Math.floor(Math.random() * (len))
            if(!Random_.includes(a)){
                Random_.push(a)
            }
        }
    }

    localStorage.setItem("randomAssignment", JSON.stringify(Random_))

    for(i = 1; i <= n; i++){
        console.log(Random_[i-1])
        str = String(i)
        name__ = "a"+String(i)
        random_(str, name__, Random_[i-1]);
    }
}

function random_(name_, id_, randomNum){
    var getId = document.getElementById(name_)
    var getName = document.getElementById(id_)
    Link_ = linkOfVNOI + idOf[randomNum];
    Name_ = nameOf[randomNum]
    //  + " (" + idOf[randomNum] + ")";
    getId.href = Link_
    getName.innerHTML = Name_
    // console.log(Name_)
}

if(Random_.length == 0){
    randomNNumber(nameOf.length, 5, false)
}
else{
    randomNNumber(nameOf.length, 5, true)
}

function clearAssignment(){
    tf = confirm("Are you sủa???")
    if(tf){
        localStorage.removeItem("randomAssignment")
        location.reload()
    }
}
// sharedStorage.set("as", "as")







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

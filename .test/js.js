// const nah = require("fs")
name_ = []
username = []

fetch("data.json")
    .then(res =>{
        return res.json();
    })
    .then(data => {
        data.forEach(user => {
            // const mark = `<li>${user.address.city}</li>`
            const mark = user.name
            const mark_ = user.username

            name_.push(mark)
            username.push(mark_)
            // console.log(name_.length)
            // document.querySelector('ul').insertAdjacentHTML('beforeend', mark)
        })
    })
    // .then(p => {
    //     op()
    // })
    .catch(error =>{
        console.error("Error!!")
    })


// function op(){
//     console.log(name_.length)
//     for(i = 0; i < name_.length; i++){
//         console.log("sudfjhisdfji")
//         console.log(`${name_[i]} ,  ${username[i]}`)
//     }
// }
function signin(){
    var name__ = document.getElementById("naem").value
    // var username_ = prompt("username")
    var o = name_.indexOf(name__)
    if(o != -1){
        var username_ = document.getElementById("passwrd").value
        if(username_ == username[o]){
            alert("Login conplete!")
        }
        if(username_ != username[o]){
            alert("Wrong!!")
        }
    }
    if(o == "-1"){
        alert("Cant found that name!!")
    }
    // console.log(o)
    // con()
}

function checkTF(){
    var t = document.getElementById("buton").checked
    console.log(t)
    if(t){
        document.getElementById("passwrd").type = "text"
    }
    else{
        document.getElementById("passwrd").type = "password"
    }
    setTimeout(() => {
        checkTF()
    }, 25);
    
}

checkTF()
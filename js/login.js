let loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener('click',function(){
    console.log("you have clicked");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username=="admin" && password=="admin@123"){
        location.assign("main.html");
    }else if(username=="" && password==""){
        window.alert("Please enter Username/Password")
    }else{
        window.alert("Incorrect Username or Password");
    }
});
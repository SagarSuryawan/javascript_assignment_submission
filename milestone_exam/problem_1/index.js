let btn = document.getElementById("check")

btn.addEventListener("click", () =>{

    let enterPassword = document.getElementById("Enter_password").value
    let reenterPassword = document.getElementById("ReEnter_password").value


    if(enterPassword == reenterPassword){
        console.log("Password Matched. Password validation Successful.")
        alert("Password Matched. Password validation Successful")
    }else{
        console.log("Password didn't match. Password validation unsuccessful")
        alert("Password didn't match. Password validation unsuccessful")
    }


})
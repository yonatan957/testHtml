const buttonSign =document.querySelector("#button");
buttonSign.addEventListener("click", e=>{
    let name = document.querySelector("#FirstName").value
    let lastName = document.querySelector("#LastName").value
    let Id = document.querySelector("#ID").value
    let Rank = document.querySelector("#rank").value
    let gender;
    if(document.querySelector("#Female").checked){
        gender ="female"
    }
    else{
        gender ="male"
    }
    window.alert(`you sign up successfully!
        first name: ${name}
        last name: ${lastName}
        id: ${Id}
        Rank: ${Rank}`)
})
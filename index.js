let div = document.createElement("div")
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        div.innerHTML = object.id
        document.body.appendChild(div)
        console.log(object)
    })
    .catch(function(error){
        alert("Unathorized Access")
        div.innerHTML = error.message;
        document.body.appendChild(div)
        console.log(error.message);
    })
}
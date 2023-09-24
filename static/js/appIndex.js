document.querySelector("#btnConsult").addEventListener('click', consult)

function consult() {
    let id = document.getElementById("id").value
    let obj = {"id": id}
    fetch('/consult_user', {
        "method": "post",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(obj)
    })
    .then(rta => rta.json())
    .then(data => showData(data))
    .catch(err => alert("Error"))
}

function showData(data) {
    let name = data[0][0]
    let lastName = data[0][1]
    let age = data[0][2]
    document.getElementById("txtData").value = name + "\n" + lastName + "\n" + age
}

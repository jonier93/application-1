document.querySelector("#btnSave").addEventListener('click', save)

function save() {
    let name = document.getElementById("name").value
    let lastname = document.getElementById("lastName").value
    let id = document.getElementById("id").value
    let age = document.getElementById("age").value
    let error_empty = field_empty(name, lastname, id, age)
    if (!error_empty) {
        let error_validation = field_validation(name, lastname, id, age)
        if (!error_validation) {
            alert("User registered")
        }
    }
}

function field_empty(name, lastname, id, age) {
    let error = false    
    if (name == "") {
        alert("The name field can not be empty")
        error = true
    }
    if (lastname == "") {
        alert("The lastName field can not be empty")
        error = true
    }
    if (id == "") {
        alert("The Id field can not be empty")
        error = true
    }
    if (age == "") {
        alert("The Age field can not be empty")
        error = true
    }
    return error
}

function field_validation(name, lastName, id, age) {
    let error = false
    if (!(/^[A-Z\s]+$/i.test(name))) {
        alert("The name field must contain only letters")
        error = true
    }
    if (!(/^[a-z\s]+$/i.test(lastName))) {
        alert("The lastname field must contain only letters")
        error = true
    }
    if (!(/^[0-9]*$/.test(id))) {
        alert("The id field must contain only numbers")
        error = true
    }
    if(!(/^[0-9]*$/.test(age))) {
        alert("The age field must contain only numbers")
        error = true
    }
    return error
}
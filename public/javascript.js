var users_el;
var users = [];
var selectedUser = {};
var el_firstName;
var el_lastName;
var el_age;
var el_gender;
var el_users;
var baseURL = 'http://localhost:3000/';

function initApp(){
    el_firstName = document.getElementById('firstName');
    el_lastName = document.getElementById('lastName');
    el_age = document.getElementById('age');
    el_gender = document.getElementById('gender');
    el_users = document.getElementById('users');
    fetchAll();
}

function clearFields(){
    el_firstName.value = '';
    el_lastName.value = '';
    el_age.value = '';
    el_gender.value = 'Male';
}

async function fetchAll() {
    var response = await fetch(`${baseURL}users`);
    users = await response.json()
    console.log(users)
    var data = '';
    if (users.length > 0) {
        for (i = 0; i < users.length; i++) {
            data += `<tr>`;
            data += `<td> ${users[i].firstName} </td>`;
            data += `<td> ${users[i].lastName} </td>`;
            data += `<td> ${users[i].age} </td>`;
            data += `<td> ${users[i].gender} </td>`;
            data += `<td><button onclick="selectUser(${i})">Edit</button></td>`;
            data += `<td><button onclick="deleteUser('${users[i]._id}')">Delete</button></td>`;
            data += `</tr>`;
        }
    }
    el_users.innerHTML = data;
};

async function addUser() {
    
    var user = {
        firstName: el_firstName.value,
        lastName: el_lastName.value,
        age: Number(el_age.value),
        gender: el_gender.value
    };
    if (user.firstName && user.lastName && user.age && user.gender) {
        await fetch(`${baseURL}users/create`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        clearFields();
        fetchAll();
    }
};

function selectUser(userId) {
    selectedUser = users[userId];
    document.getElementById("edit-btn").style.display = 'block';
    document.getElementById("add-btn").style.display = 'none';

    el_firstName.value = selectedUser.firstName;
    el_lastName.value = selectedUser.lastName;
    el_age.value = selectedUser.age;
    el_gender.value = selectedUser.gender;
};

async function editUser(userId) {
    var user = users[userId];
    document.getElementById("edit-btn").style.display = 'none';
    document.getElementById("add-btn").style.display = 'block';

    var user = {
        firstName: el_firstName.value,
        lastName: el_lastName.value,
        age: Number(el_age.value),
        gender: el_gender.value
    };

    await fetch(`${baseURL + "users/" + selectedUser._id}/update`, {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    clearFields();
    fetchAll();
};

async function deleteUser(userId) {
    await fetch(`${baseURL + "users/" + userId}/delete`, {
        method: 'delete'
    })
    fetchAll();
};
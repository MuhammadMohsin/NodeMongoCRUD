var students_el;
var students = [];
var selectedStudent = {};
var el_firstName;
var el_lastName;
var el_age;
var el_gender;
var el_students;
var baseURL = 'http://localhost:3000/';

function initApp(){
    el_firstName = document.getElementById('firstName');
    el_lastName = document.getElementById('lastName');
    el_age = document.getElementById('age');
    el_gender = document.getElementById('gender');
    el_students = document.getElementById('students');
    fetchAll();
}

function clearFields(){
    el_firstName.value = '';
    el_lastName.value = '';
    el_age.value = '';
    el_gender.value = 'Male';
}

async function fetchAll() {
    var response = await fetch(`${baseURL}students`);
    students = await response.json()
    console.log(students)
    var data = '';
    if (students.length > 0) {
        for (i = 0; i < students.length; i++) {
            data += `<tr>`;
            data += `<td> ${students[i].firstName} </td>`;
            data += `<td> ${students[i].lastName} </td>`;
            data += `<td> ${students[i].age} </td>`;
            data += `<td> ${students[i].gender} </td>`;
            data += `<td><button onclick="selectStudent(${i})">Edit</button></td>`;
            data += `<td><button onclick="deleteStudent('${students[i]._id}')">Delete</button></td>`;
            data += `</tr>`;
        }
    }
    el_students.innerHTML = data;
};

async function addStudent() {
    
    var student = {
        firstName: el_firstName.value,
        lastName: el_lastName.value,
        age: Number(el_age.value),
        gender: el_gender.value
    };
    if (student.firstName && student.lastName && student.age && student.gender) {
        await fetch(`${baseURL}students/create`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });
        clearFields();
        fetchAll();
    }
};

function selectStudent(studentId) {
    selectedStudent = students[studentId];
    document.getElementById("edit-btn").style.display = 'block';
    document.getElementById("add-btn").style.display = 'none';

    el_firstName.value = selectedStudent.firstName;
    el_lastName.value = selectedStudent.lastName;
    el_age.value = selectedStudent.age;
    el_gender.value = selectedStudent.gender;
};

async function editStudent(studentId) {
    var student = students[studentId];
    document.getElementById("edit-btn").style.display = 'none';
    document.getElementById("add-btn").style.display = 'block';

    var student = {
        firstName: el_firstName.value,
        lastName: el_lastName.value,
        age: Number(el_age.value),
        gender: el_gender.value
    };

    await fetch(`${baseURL + "students/" + selectedStudent._id}/update`, {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
    clearFields();
    fetchAll();
};

async function deleteStudent(studentId) {
    await fetch(`${baseURL + "students/" + studentId}/delete`, {
        method: 'delete'
    })
    fetchAll();
};
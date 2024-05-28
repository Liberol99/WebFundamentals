//json data :) içindeki modeli
let array = [
    { recId: 1, firstName: "Orkan", lastName: "Koroglu" },
    { recId: 2, firstName: "Semih", lastName: "Çiftçi" }
];

//mesaj alert
function showMsg() {
    alert(document.getElementById("txt1").value);
}

//API get işlemi
function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.onload = function () {
        if (this.status === 200) {
            let jsonData = JSON.parse(this.responseText);
            let html = "";
            jsonData.data.forEach(element => {
                html += `<img style="width:100px;height:100px;object-fit:cover;" src="${element.avatar}" />`
            });
            document.querySelector(".apiGet").innerHTML = html;
        }
    }
    xhr.send();
}

//API post işlemi
function postRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (this.status === 201) { // Başarılı olursa
            let responseData = JSON.parse(this.responseText);
            console.log("Yeni post oluşturuldu:", responseData);
        }
    };

    var postData = {
        title: "Yeni Gönderi",
        body: "Bu bir test gönderisidir.",
        userId: 1
    };

    xhr.send(JSON.stringify(postData));
}

//Dictionary<string,object> ile aynı mantık
function mapOperation() {
    let dRow = new Map();
    let firstName = "Semih";
    let lastName = "Ciftci";
    let nums = [10, 20, 30];
    let app = { name: "Vogue", no: 101 };
    dRow.set("firstName", firstName);
    dRow.set("lastName", lastName);
    dRow.set("nums", nums);
    dRow.set("app", app);
    if (dRow != null) {
        html = `<span>${dRow.get("firstName")}</span><span>${dRow.get("app").name}</span>`;
        document.querySelector(".mapOperation").innerHTML = html;
    }
}

//form verisi yakalama
function formOperation() {
    let eMail = document.querySelector("#eMail").value;
    let password = document.querySelector("#password").value;
    let checkBox = document.querySelector("#checkBox").checked;
    if (eMail.trim() != "" && password.trim() != "") {
        if (password.length >= 6) {
            console.log(eMail + " " + password + " " + checkBox);
        } else {
            alert("Şifre en az 6 karakter olmalidir!");
        }
    }
}

//diziler
let myArray = [10, "Orkan", true, 45];
console.log(myArray.length);
console.log(myArray[2]);

//sayfa yüklenirken çalışsın
document.addEventListener("DOMContentLoaded", function () {

    document.getElementsByTagName("button")[0].style.fontSize = "16px";

    localStorage.setItem("jsonArray", JSON.stringify(array));

    var lastArray = localStorage.getItem("jsonArray");

    JSON.parse(lastArray).forEach(element => {
        console.log(`Ad: ${element.firstName} Soyad: ${element.lastName}`);
    });

    //toggle özelliğini kullanma
    let demoDivision = document.querySelector('#demoDivision');
    demoDivision.classList.add('font-weight-bold');
    demoDivision.classList.remove('font-weight-bold');
    demoDivision.addEventListener('mouseover', (event) => {
        event.target.classList.toggle('text-danger');
    });
    demoDivision.addEventListener('mouseout', (event) => {
        event.target.classList.toggle('text-danger');
    });

    //node listesini array çevirip array metotlarını kullanma 
    let inputs = [...document.querySelectorAll('.input-tag-group input')];
    if (inputs.some(x => x.type === 'text')) {
        inputs.forEach(input => {
            input.style.backgroundColor = 'blue';
            input.style.color = 'red';
        });
    }

    //1 saniye sonra çaışsın
    setTimeout(function () {
        document.querySelector('body').classList.add('bg-dark');
    }, 1000);
});
let countries = [
    { "RecId": 87, "Name": "France", "Type": 1, "Date": "11.04.2024", "Products": "LIVE" },
    { "RecId": 64, "Name": "Germany", "Type": 2, "Date": "11.04.2024", "Products": "VOGUE,FABRIC" },
    { "RecId": 11, "Name": "England", "Type": 2, "Date": "11.04.2024", "Products": "VOGUE" },
    { "RecId": 70, "Name": "Turkey", "Type": 1, "Date": "11.04.2024", "Products": "FABRIC" }
]
function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
let form = document.createElement('form');
form.classList.add('col-lg-6');
form.classList.add('mx-auto');
form.classList.add('mt-5');
form.classList.add('p-0');
form.innerHTML = `
<div class="form-group">
<label>RecId</label>
<input type="text" class="form-control" id="text1" value="${generateGuid()}" readonly>
</div>
<div class="form-group">
<label>Name</label>
<input type="text" class="form-control" id="text2">
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" onchange="changeProduct()" id="checkBox1" value="LIVE">
  <label class="form-check-label">LIVE</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" onchange="changeProduct()" id="checkBox2" value="VOGUE">
  <label class="form-check-label">VOGUE</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" onchange="changeProduct()" id="checkBox3" value="FABRIC">
  <label class="form-check-label">FABRIC</label>
</div>
<select id="combobox1">
    <option value="1">Kredi Karti</option>
    <option value="2">Kapida Ödeme</option>
    <option value="3">EFT/Havele Ödeme</option>
</select>
<input type="date" class="form-control col-2 mt-3" id="datePicker1">
<button class="btn btn-secondary mt-3" onclick="saveRecord(event)">Kaydet</button>
`;

let table = document.createElement('table');
table.className = "table col-lg-6 mx-auto mt-5";
let tableHead = document.createElement('thead');
tableHead.innerHTML = `
<tr>
    <th>RecId</th>
    <th>Name</th>
    <th>Sil</th>
</tr>
`;
let tableBody = document.createElement('tbody');
function createTableBody() {
    tableBody.innerHTML = "";
    if (countries !== null && countries.length > 0) {
        countries.forEach((country) => {
            tableBody.innerHTML += `
            <tr>
                <td>${country.RecId}</td>
                <td>${country.Name}</td>
                <td><button class="btn btn-danger" onclick="deleteRecord(${country.RecId})">Sil</button></td>
            </tr>
            `;
        });
    }
}
createTableBody();
table.append(tableHead);
table.append(tableBody);
document.querySelector('body').append(form);
document.querySelector('body').append(table);
function deleteRecord(recId) {
    console.log(countries.find(x => x.RecId === recId));
    console.log(countries.some(x => x.RecId === recId));
    console.log(countries.filter(x => x.RecId === recId));
    // Silinecek öğenin dizideki konumunu bulun
    var index = countries.findIndex(x => x.RecId === recId);
    // Eğer belirli bir RecId'ye sahip öğe bulunduysa, diziden sil
    if (index !== -1) {
        countries.splice(index, 1);
        createTableBody();
    }
}

let products = [];
function changeProduct() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes !== null && checkboxes.length > 0) {
        products = [];
        checkboxes.forEach(checkbox => {
            products.push(checkbox.value);
        });
    }
}

let formData = [];
function saveRecord(event) {
    event.preventDefault();
    let recId = document.querySelector('#text1').value;
    let name = document.querySelector('#text2').value;
    let type = document.querySelector('#combobox1').value;
    let date = document.querySelector('#datePicker1').value;
    formData = JSON.parse(localStorage.getItem('formData'));
    if (formData === null || formData.length === 0) formData = [];
    formData.push({ "RecId": recId, "Name": name, "Type": type, "Date": date, "Products": JSON.stringify(products) });
    localStorage.setItem('formData', JSON.stringify(formData));
}

console.log([...document.querySelectorAll('input')].find(x => x.type == 'text'));
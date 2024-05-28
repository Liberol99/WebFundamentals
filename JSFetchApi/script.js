// function getStudents(url) {
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }
// getStudents('students.json');

// function getJsonData(url) {
//     return fetch(url)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }
//getJsonData('https://jsonplaceholder.typicode.com/albums');

// function getJsonData(url) {
//     return fetch(url)
//         .then((response) => response.json())
//         .catch((err) => console.log(err));
// }
// getJsonData('https://jsonplaceholder.typicode.com/albums')
//     .then((data) => {
//         const jsonData = data;
//         console.log(jsonData);
//     });


// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         mode: "cors", // no-cors, *cors, same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: "same-origin", // include, *same-origin, omit
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: "follow", // manual, *follow, error
//         referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });


//Sentez-Api-Final

async function LoginToApi() {
    try {
        const url = 'http://192.168.0.7:8080/api/Authentication/Login?userCode=Sentez&password=1&companyCode=10&userType=0';
        const data = {};
        //const token = 'YOUR_TOKEN';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${token}` // Token burada ekleniyor
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        console.log(responseData.Data);
        return responseData.Data;
    } catch (error) {
        console.error('Hata:', error);
    }
}
// LoginToApi();

// async function PostBOToApi() {
//     try {
//         const url = 'http://192.168.0.7:8080/api/BO/PostBO?BOName=InventoryBO';
//         const data = {
//             "Erp_Inventory": [
//                 {
//                     "RecId": "-1",
//                     "InventoryCode": "Iphone 11",
//                     "InventoryName": "Iphone 11",
//                     "UnitId": 5
//                 }
//             ],
//             "Erp_InventoryAttachment": [
//                 {
//                     "RecId": "-1",
//                     "InventoryId": "-1",
//                     "FileName": "IPHONE11.jpg",
//                     "Attachment": "TWVyYWhhYmEsIMO2bmx5YWEh",
//                     "Type": 8
//                 }
//             ]
//         }
//         const token = await LoginToApi();
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}` // Token burada ekleniyor
//             },
//             body: JSON.stringify(data)
//         });
//         const responseData = await response.json();
//         console.log(responseData);
//     } catch (error) {
//         console.error('Hata:', error);
//     }
// }
// PostBOToApi();

// async function UtilityQueryToApi() {
//     try {
//         const url = 'http://192.168.0.7:8080/api/Utility/UtilityQuery';
//         const data = {
//             "query": "select top 10 * from Erp_Employee"
//         }
//         const token = await LoginToApi();
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}` // Token burada ekleniyor
//             },
//             body: JSON.stringify(data)
//         });
//         const responseData = await response.json();
//         console.log(responseData.Data);
//         return responseData.Data;
//     } catch (error) {
//         console.error('Hata:', error);
//     }
// }

// (async () => {
//     const employees = await UtilityQueryToApi();
//     console.log(employees);
//     if (employees !== null && employees.length > 0) {
//         let ul = document.createElement('ul');
//         employees.forEach(employee => {
//             ul.innerHTML += `<li>${employee.EmployeeName}</li>`;
//         });
//         document.querySelector('body').append(ul);
//     }
// })();

// async function GetActiveUserToApi() {
//     try {
//         const url = 'http://192.168.0.7:8080/api/System/GetActiveUser';
//         const token = await LoginToApi();
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}` // Token burada ekleniyor
//             },
//         });
//         const responseData = await response.json();
//         console.log(JSON.parse(responseData.Data).UserCode, JSON.parse(responseData.Data).UserName);
//     } catch (error) {
//         console.error('Hata:', error);
//     }
// }
// GetActiveUserToApi();
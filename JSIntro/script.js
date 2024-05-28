let myArray = [];

myArray.push("Orkan");
myArray.push(10);
myArray.push(true);
myArray.push("Silinecek veri");

myArray[2] = false;
myArray.splice(3, 1);

let myObject1 = { RecId: 1, EmployeeCode: "Y-01", EmployeeName: "Orkan" }
let myObject2 = { RecId: 2, EmployeeCode: "Y-02", EmployeeName: "Semih" }
myObject1["EmployeeSurname"] = "Köroğlu";
myObject2["EmployeeSurname"] = "Çiftçi";

myArray.push(myObject1["EmployeeName"]);
myArray.push(myObject2);
myArray.pop();

document.write(myArray);
document.write(myArray.length);


function getClick(event) {
    console.log(event.target);
}
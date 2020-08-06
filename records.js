function init() {

    var myArray = [];
    if (localStorage.bmiRecords) {
        myArray = JSON.parse(localStorage.bmiRecords);
        for (var i = 0; i < myArray.length; i++) {
            var Name = myArray[i].Name;
            var Age = myArray[i].Age;
            var Gender = myArray[i].Gender;
            var Weight = myArray[i].Weight;
            var Height = myArray[i].Height;
            var Favfoods = myArray[i].Favfood;
            var Bmi = myArray[i].Bmi;
            preParedTable(i, Name, Age, Gender, Weight, Height, Favfoods, Bmi);
        }

    }
}
var row;

function preParedTable(i, Name, Age, Gender, Weight, Height, Favfoods, Bmi) {
    var myArray = [];
    var table = document.getElementById("tabBody");
    row = table.insertRow();
    var NameCell = row.insertCell(0);
    var Name1Cell = row.insertCell(1);
    var Name2Cell = row.insertCell(2);
    var Name3Cell = row.insertCell(3);
    var Name4Cell = row.insertCell(4);
    var Name5Cell = row.insertCell(5);
    var Name6Cell = row.insertCell(6);
    var Name7Cell = row.insertCell(7);
    var Name8Cell = row.insertCell(8);
    NameCell.innerHTML = Name;
    Name1Cell.innerHTML = Age;
    Name2Cell.innerHTML = Gender;
    Name3Cell.innerHTML = Weight;
    Name4Cell.innerHTML = Height;
    Name5Cell.innerHTML = Favfoods;
    Name6Cell.innerHTML = Bmi;
    Name7Cell.innerHTML = '<a type="button" class="btn btn-success fas fa-edit" id="item" value = "on" onclick="edit(this)"></a>';

    Name8Cell.innerHTML = '<button class="btn btn-danger fas fa-trash-alt" onclick="remove1(this)"></button>';

}

function remove1(n) {
    var myArray = [];
    if (localStorage.bmiRecords) {
        myArray = JSON.parse(localStorage.bmiRecords);
    }
    var table = document.getElementById("tabled");
    var x = n.parentNode.parentNode.rowIndex;
    table.deleteRow(x);
    myArray.splice(x - 1, 1);
    localStorage.setItem('bmiRecords', JSON.stringify(myArray));

}

//  updating

// const update1 = function() {
//   alert("update");
//   let btn = document.querySelector("#cal");
//   console.log(btn);
// }
function clearAllRecords() {
    document.getElementById("tabBody").innerHTML = " ";
    localStorage.clear();
}

function edit(n) {
    var x = n.parentNode.parentNode.rowIndex;

    var item = "index.html?id=";
    item += x;
    location.replace(item);
}

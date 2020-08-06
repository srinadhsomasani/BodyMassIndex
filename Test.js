
function clear1() {

  document.getElementById("myform").reset();
  document.getElementById("bmi-result").innerHTML = "";
}
function bmiInit() {

  if (localStorage.bmiRecords == null) {

    localStorage.setItem("bmiRecords", "[]");

  }

}
function validate1(name, age, male, female, weight, height, i, c, a, ) {
  var allchecked = true;
  // alert(allchecked);
  // checkname
  var exp = /^[A-Za-z" "]+$/;
  if (name.match(exp) == null) {
    document.getElementById("nameError").innerHTML = "* Enter valid name";
    allchecked = false;
  }
  else {

    document.getElementById("nameError").innerHTML = "";

  }


  // checkage

  var exp1 = /^[0-9]+$/;
  if (age.match(exp1) == null) {
    document.getElementById("ageError").innerHTML = "* Enter Valid age";
    allchecked = false;
  }
  else {

    document.getElementById("ageError").innerHTML = "";
  }

  //checkweight

  var exp2 = /^[0-9]+$/;
  if ((weight.match(exp2) != null) && (weight > 2 && weight < 500)) {
    document.getElementById("weightError").innerHTML = "";
  }
  else {
    allchecked = false;
    document.querySelector("#weightError").innerHTML = "* Enter Valid weight(between 2 to 500)";
  }
  // checkheight
  var exp3 = /^[0-9]+$/;
  if ((height.match(exp3) != null) && (height > 39 && height < 250)) {
    document.getElementById("heightError").innerHTML = "";
  }
  else {
    allchecked = false;

    document.querySelector("#heightError").innerHTML = "* Enter Valid Height(between 40 to 250)";
  }

  // checkGender

  if (male.checked) {
    document.getElementById("genderError").innerHTML = "";
  }
  else if (female.checked) {
    document.getElementById("genderError").innerHTML = "";
  }
  else {
    allchecked = false;
    document.getElementById("genderError").innerHTML = "* Select any one";
  }

  // checkfavfood

  if (i.checked) {
    document.getElementById("foodError").innerHTML = "";
  }
  else if (c.checked) {
    document.getElementById("foodError").innerHTML = "";
  }
  else if (a.checked) {
    document.getElementById("foodError").innerHTML = "";
  }
  else {
    allchecked = false;
    document.getElementById("foodError").innerHTML = "* Select Any one Option";
  }
  return allchecked;
}




function click1(p) {
  var food = [];
  if (localStorage.bmiRecords == null) {
    localStorage.setItem("bmiRecords", "[]");
  }
  var name = document.getElementById("name").value;
  // checkName(name);
  var age = document.getElementById("age").value;
  // checkAge(age);
  var weight = document.getElementById("Weight").value;
  // checkWeight(weight);
  var height = document.getElementById("Height").value;

  // checkHeight(height);

  var food1 = document.getElementById("indian");
  var food2 = document.getElementById("chinese");
  var food3 = document.getElementById("arabian");

  var chb = document.getElementsByName("1");

  for (var i = 0; i < chb.length; i++) {
    if (chb[i].checked) {
      food.push(chb[i].value);
    }
  }




  var myArray = [];

  var gm = document.getElementById("male");

  var gf = document.getElementById("female");
  // checkGender(gm, gf);
  var isok = validate1(name, age, gm, gf, weight, height, indian, chinese, arabian);

  var GenderValue;
  if (gm.checked) {
    GenderValue = gm.value;

  } else if (gf.checked) {
    GenderValue = gf.value;

  }


  if (isok == true) {
    // alert("loop");
    bmi = (document.getElementById("Weight").value) / (Math.pow((document.getElementById("Height").value / 100), 2));
    bmi = Math.round(bmi);
    if (bmi > 0) {
      document.getElementById("bmi-result").innerHTML = bmi;
    }


    // object creation
    bmi = bmi.toString();
    var object = {
      Name: name,
      Age: age,
      Gender: GenderValue,
      Weight: weight,
      Height: height,
      Favfood: food,
      Bmi: bmi
    }
    // alert(p.textContent);
    myArray = JSON.parse(localStorage.getItem("bmiRecords"));
    if (p.textContent == "Calculate") {
      myArray.push(object);
      localStorage.bmiRecords = JSON.stringify(myArray);
    }
    else if (p.textContent == "Update ") {
      myArray[product - 1].Name = name;
      myArray[product - 1].Age = age;
      myArray[product - 1].Gender = GenderValue;
      myArray[product - 1].Weight = weight;
      myArray[product - 1].Height = height;
      myArray[product - 1].Favfood = food;
      myArray[product - 1].Bmi = bmi;
      localStorage.bmiRecords = JSON.stringify(myArray);
    }
   
    
  }
}
var product;
const update = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  product = urlParams.get('id');
  // console.log(product);
  var a = /^[0-9]+$/;

  if (product.match(a))
    document.querySelector("#cal-button").innerHTML = "<button class='btn btn-primary' onclick='click1(this)'>Update <i class='fas fa-sync' style='font-size: 15px;'></button>";
  // URLSearchParams.delete(urlParams);
  // document.getElementById("modify").innerHTML = "Updating";
  //  console.log(product);
  var myArray = [];
  myArray = JSON.parse(localStorage.getItem("bmiRecords"));
  var name = myArray[product - 1].Name;
  var age = myArray[product - 1].Age;
  var gender = myArray[product - 1].Gender;
  var food = myArray[product - 1].Favfood;
  var weight = myArray[product - 1].Weight;
  var height = myArray[product - 1].Height;
  // console.log(myArray);
  // console.log(name);
  document.querySelector("#name").setAttribute("value", name);
  document.querySelector("#age").setAttribute("value", age);
  document.querySelector("#Weight").setAttribute("value", weight);
  document.querySelector("#Height").setAttribute("value", height);
  // alert(gender);
  if (gender == "male") {
    document.getElementById("male").checked = true;
  }
  else {
    document.getElementById("female").checked = true;
  }
  for (var i = 0; i < food.length; i++) {
    if (food[i] == "indian")
      document.getElementById("indian").checked = true;
    else if (food[i] == "chinese")
      document.getElementById("chinese").checked = true;
    else if (food[i] == "arabian")
      document.getElementById("arabian").checked = true;
  }

  // document.getElementsByName("1").setAttribute("value",food);

}

document.addEventListener("DOMContentLoaded", function () { update(); })
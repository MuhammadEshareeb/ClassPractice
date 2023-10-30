// ************************Name*********************************
function getvalue(){
    var input = document.getElementById("name");
    // console.log(input.value);
    var obj = {
        name: input.value
    }
// ** Convert object into string ***

localStorage.setItem("name",JSON.stringify(obj));
var res = localStorage.getItem("name");

// *****Convert String into object ******
var getValue = JSON.parse(res);
console.log(getValue);
}
//  ===============Adrees========================
function getvalue1(){
    var input = document.getElementById("adrees");
    // console.log(input.value);
    var obj = {
        adrees: input.value
    }
// ** Convert object into string ***

localStorage.setItem("adrees",JSON.stringify(obj));
var res = localStorage.getItem("adrees");

// *****Convert String into object ******
var getValue = JSON.parse(res);
console.log(getValue);
}
// ======================================Age=========================
function getvalue2(){
    var input = document.getElementById("age");
    // console.log(input.value);
    var obj = {
        age: input.value
    }
// ** Convert object into string ***

localStorage.setItem("age",JSON.stringify(obj));
var res = localStorage.getItem("age");

// *****Convert String into object ******
var getValue = JSON.parse(res);
console.log(getValue);
}
// // ************************Name*********************************
// function getvalue(){
//     var input = document.getElementById("name");
//     // console.log(input.value);
//     var obj = {
//         name: input.value
//     }
// // ** Convert object into string ***

// localStorage.setItem("name",JSON.stringify(obj));
// var res = localStorage.getItem("name");

// // *****Convert String into object ******
// var getValue = JSON.parse(res);
// console.log(getValue);
// }
// //  ===============Adrees========================
// function getvalue1(){
//     var input = document.getElementById("adrees");
//     // console.log(input.value);
//     var obj = {
//         adrees: input.value
//     }
// // ** Convert object into string ***

// localStorage.setItem("adrees",JSON.stringify(obj));
// var res = localStorage.getItem("adrees");

// // *****Convert String into object ******
// var getValue = JSON.parse(res);
// console.log(getValue);
// }
// // ======================================Age=========================
// function getvalue2(){
//     var input = document.getElementById("age");
//     // console.log(input.value);
//     var obj = {
//         age: input.value
//     }
// // ** Convert object into string ***

// localStorage.setItem("age",JSON.stringify(obj));
// var res = localStorage.getItem("age");

// // *****Convert String into object ******
// var getValue = JSON.parse(res);
// console.log(getValue);
// }
// *************2-11-2023***************
// ********======Name=====***
function  getvalue(){
    var input = document.getElementById("name");
    var getStorageValue = localStorage.getItem("name")
    var OriginalValue = JSON.parse(getStorageValue);

    console.log(OriginalValue);
    if(!OriginalValue) {
        OriginalValue = []
    }
    var UserObj = {
        name : input.value
    }
    OriginalValue.push(UserObj)
localStorage.setItem("name",JSON.stringify(OriginalValue));
} 
// *********************=======================Adrees====================********************
function  getvalue1(){
    var input = document.getElementById("adrees");
    var getStorageValue = localStorage.getItem("adrees")
    var OriginalValue = JSON.parse(getStorageValue);

    console.log(OriginalValue);
    if(!OriginalValue) {
        OriginalValue = []
    }
    var UserObj = {
        name : input.value
    }
    OriginalValue.push(UserObj)
localStorage.setItem("adrees",JSON.stringify(OriginalValue));
}








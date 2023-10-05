// var months = diference / (1000 * 60 * 60 * 24 * 30);
// var days = (months - Math.floor(months) * 24 );
// var hours =(days - Math.floor(days) * 60);
// var minutes = (hours - Math.floor(hours) * 60);
// var sec = (minutes - Math.floor(minutes) * 60);
// // console.log(months);
// console.log(days);
// console.log(hours);
// console.log(minutes);
// console.log(sec);

// function popUp() {
//     alert("Hello World");

// }
// for(var i=0 ; i<=9 ; i++) {
//     popUp()
// }
// function sum(a,b){
//     console.log(a*b);
// }
// var a = +prompt("Enter Your roll number")
// var b = +prompt("Enter Your roll number")
// sum(a,b)

// function table (a,b){/
   
// function sum(a,b)
// {
//     var res = a + b ;
//     return res;
// }
// console.log(sum(12,90));

// function calc (num1,opr, num2) {
// if (opr === "+"){ 
//     return num1 + num2
// }
// else if (opr === "-"){ 
//     return num1 - num2
// }
// else if (opr === "*"){ 
//     return num1 * num2
// }
// else if  (opr === "/"){ 
//     return num1 / num2
// }
// }
// var num1 = +prompt("Enter a first num");
// var opr = prompt("Enter a opr num");
// var num2 = +prompt("Enter a Seconde num");
// var result = calc (num1 , opr , num2);
// console.log(result);

// var answer = ("Good Job..")
// console.log(answer);


// (5-10-2023)
// ===================================While=============================
// function table() {
// var num1 = +prompt("Enter your First value.");
// var num2 = +prompt("Enter your second value.");
// var i = 1;
// while (i<=num2){
//     document.write(num1 + "*" +i+ "=" + num1 *i + " <br>");
//     i++;
// }
// }
//  ===========================Do While================================
/*var i =1;
do {
    document.write(num1 + "*" +i+ "=" + num1 *i + " <br>");
    i++;
} while(i<=num2)*/

// ======practice======
function get(){
    var user = document.getElementById("input");
    var user1 = document.getElementById("user");
    var user2 = document.getElementById("userinput");
    if(user && user1 && user2){
        alert("Good Job...")
    } else{
        alert("Soory...")
    }
    console.log(user);
    console.log(user1);
    console.log(user2);
}

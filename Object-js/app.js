var arr =["Eshareeb","Taha"];
console.log(arr);
console.log(typeof arr);
// **********0********
var student1 = {
    name: "Eshareeb",
    fathername: "AbdulKareem",
    age: "17",
    email: "eshareebm@gmail.com",
    addrees: "Karachi",
    getName: function(){
        return this.name;
    }
}
delete student1.getName;
// console.log(student1.getName());
console.log("age" in student1);
console.log(student1);
student1.course = ["Html5", "Css3" , "Js"];
student1.course.push("React.js" , "Node.js");
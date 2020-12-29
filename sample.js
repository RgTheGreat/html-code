var x = 15;
var y = 14;

document.getElementById("Demo").innerHTML = x + y; 



var d = new Date();
d.setFullYear(2020);
document.getElementById("demo").innerHTML = d;


var d = new Date();
d.setHours(22);
document.getElementById("demo").innerHTML = d;




var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


//--------page 1------

var cityname = prompt("Enter your city name");

if(cityname == "karachi"){

alert("city of light");
}
 else if(cityname == "islamabad"){

alert("Wellcom to cleynes city");
 }
else if(cityname == "lahore"){

alert("Wellcom to metro city");

}else{
    alert("city is not found");
}


// ------Gander 2------

var Gander = prompt("Enter your Gander");

if(Gander == "male"){

alert(" Good Morning Sir");
}

else if(Gander == "female"){

alert("Good Morning Ma’am");

}else{
    alert("wellcom to other");
}



// --------Trafic color 3--------

var color = prompt("Enter Trafic color");

if(color == "red"){

alert("Must Stop");

}else if(color == "yellow"){

    alert("Ready to move");
}

else if(color == "green"){

alert("Move now");

}else{
    alert("This is a not Trafic signal color");
}



// ---------remaining fuel 4-----

var remainingfuel = Number(prompt("Enter the remaining fuel liters"));

if(remainingfuel < 2.25){
    document.write("Please refill the fuel in your car");
}else{
  document.write("you have a enough fuel in your car");
}


//  --------true or folse 5-------

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// condition  is true

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// condition is False //

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// // condition is False //

if (c === 13){
    alert("condition 2 is true");
    }
    // condition is true//

    if (++c < 14){
        alert("condition 3 is true");
        }
        // condition is false

        if(c === 14){
        alert("condition 4 is true");
        }
        // condition is true

 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//   condition is true

 var user = Number(prompt("8-4 =?"));
 var a = 4;
 if (user == a){
 alert("True");
}
  if (user!=a){
  alert("False")
 }
var car = Number(prompt("car size"))
var cat = Number(prompt("cat size"))

if(car < cat){
    alert("car is smaller than cat")
}if(car > cat){
    alert("car is bigger than cat")
}

// -------mark sheet 6----

var eng = Number(prompt("Enter your English marks"))
var urd = Number(prompt("Enter your Urdu marks"))
var mth = Number(prompt("Enter your Math marks"))

var totalmarks = 300;
var obtmarks = eng + urd + mth;
var percent = (obtmarks / totalmarks) * 100;

document.write("<h1>Marks Sheet </h1> <br>")
document.write("Total Marks:" + "<b>" + totalmarks + "</b><br><br>")
document.write("Marks Obtained:" +"<b> " + obtmarks + "</b><br><br>")
document.write("Percentage: " + "<b>"+ percent +"%"+ "</b><br><br>")

if(percent >=80 ){
    document.write("Grade: A-one" +"<br><br>")
    document.write("Remarks: Excellent" +"<br>")
}

else if(percent <=79 && percent >=70){
    document.write("Grade: A" + "<br><br>")
    document.write("Remarks: Good" + "<br>")
}

else if(percent <=69 && percent >=60){
    document.write("Grade: B" + "<br><br>")
    document.write("Remarks: You need to improve" + "<br>")
}

else if(percent <=60){
    document.write("Grade: Fail" + "<br><br>")
    document.write("Remarks: Sorry.. Work Hard"+"<br>")
}

// ---------- Guess game 7---------

var secterNumber = 4;
var guessNumber = Number(prompt("(Enter your any numbers between 1 to 10"))

if(secterNumber === guessNumber){
    alert("Bingo! Correct answer")
    
}else if(secterNumber==guessNumber +1){
    alert("Close enough to the correct answer")
}else{
    alert("please try again")
}

// ------- whether 8-----

var userinput = Number(prompt("Write a Number to check can divisible by 3"))

if(userinput % 3==0){
    alert("number is divisible by 3")
}else{
    alert("number is not divisible by 3")
}

// ------9no-------

var userinput = Number(prompt("Write a Number so that we can check that is even or odd"))

if(userinput % 2 == 0){
    alert("given number is even")
}else{
    alert("given number is odd")
}

// // ----------Write temperature 10------------

var temperature = Number(prompt("Enter the temperature in Celsius"))

if (temperature >= 40){
    document.write("It is too hot outside.")
}

else if(temperature <= 39 && temperature >= 30){
    document.write("The Weather today is Normal.")
}

else if(temperature <= 29 && temperature >= 20){
    document.write("Today’s Weather is cool")
}

else if(temperature >=0 && temperature <=19){
     document.write("OMG! Today’s weather is so Cool.")
   
}

// // -----------Operation 11------

var firstnum = Number(prompt("Enter your first number"));
var secondnum = Number(prompt("Enter your second number"));

var oper = prompt("Enter your Operation");

if(oper === "+"){
document.write(firstnum + secondnum);
}
if(oper === "-"){
document.write(firstnum - secondnum);
}
  if(oper === "*"){
document.write(firstnum * secondnum);
}
else if(oper === "/"){
document.write(firstnum / secondnum);
}

else if(oper === "%"){
document.write(firstnum / secondnum * 100);
}
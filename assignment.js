//chappter no.01 , Chp name : Alerts
//task01
alert("javaScript Alert \n welcom to RjTechnics")

//task02
alert("JavaScript Alert \n Error! please enter a valid password")
task03
alert("javaScript Alert \n \n Welcome to JS land.. \n happy Coding!")
task04
alert("javaScript Alert \n \n Welcome to JS land.. ")
alert("javaScript Alert \n Happy Coding!")

alert("javaScript Alert \n Hello... I can run JS through web browsers console")


//chp02  , variables for string
// task01
var username
task02
var myName = 'Rajesh kumar';
task03
var message = 'hello world'
task04
var course = 'web and app development'
alert(myName)
alert(message)
alert(course)

//task05

// //task06
var email = 'rajeshkumarbhattia@gmail.com'
alert("my email address is " +email)
// task07
var book ='A smarter way to learn JavaScript'
alert("I am trying to learn from the Book " +book)

// task08
document.write("yah I can write HTML content through javaScript")

// task09
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”) it is undeterminated string



// //chappter03 Variable for Number
// //task01
let age = 20
alert("I am " +age+ "years old")

task02
let age = 20
alert("You have visited this site " +age+ "times")
 var birthYear = 2000
 console.log("My birth year is 200 \n Data type of my declared variable is number")

// //task04
 var a = prompt("Your name")
 var q = +prompt("quantitiy")
 var b = prompt("product title")

console.log(a+ " " , "ordered" , " " +q+ " " +b+ " " , "on XYZ.Xclothing.com")



// chp04   variable names : legal and illegaal



// //ch05 math expression
// //task01

var a = +prompt("enter 1st num")
var b = +prompt("enter 2nd num")
var c = a+b
console.log("the sum of 1st and 2nd number is: "+c)

// //task02 for subtraction
var a = +prompt("enter 1st num")
 var b = +prompt("enter 2nd num")
 var c = a-b
 console.log("the sub is: "+c)

// //  //task02 for * 
 var a = +prompt("enter 1st num")
 var b = +prompt("enter 2nd num")
 var c = a*b
 console.log("the sub is: "+c)

// //  //task02 for /
 var a = +prompt("enter 1st num")
 var b = +prompt("enter 2nd num")
 var c = a/b
 console.log("the sub is: "+c)

// //  //task02 for %
 var a = +prompt("enter 1st num")
 var b = +prompt("enter 2nd num")
 var c = a%b
 console.log("the sub is: "+c)




// //task04
var tickprice = 600
// for 5 ticket
totl = tickprice *5
console.log("total cost to buy 5 tickets to a movie is " +totl+ "PKR")

// // //task05
var number = +prompt("put number")
for(let i=1;i<=10;i++){
    result = i * number
    console.log(number+ "*" +i+ " " + "=" +result )
}


// // //task06
var fTmp = +prompt("enter tem in fAHREIHEITE")
var FtoC = (fTmp-32)*5/9
console.log("temp in celcious  is: "+FtoC)

// now celcious to fah
var cTmp = +prompt("enter tem in CELCIOUS")
var CtoF = (cTmp*9/5)+32 
console.log("temp in fahreinheit  is: "+CtoF)




// //chaptter 06-8 ****   chaptter name " Mathematics Expression "

// //task01
console.log("Result:")
a = 10
console.log("The value of a is "+a)
console.log("...................")
++a
console.log("The value of ++a is: "+a)
a++
console.log("The value of a++ is:"+a)
--a
console.log("The value of --a is: "+a)
a--
console.log("The value of a-- is: "+a)



// //task02
var a =2 , b=1
var result =  --a - --b + ++b + b--
console.log(result)

// //explanation

// --a  // it wil decrese by 1 , a =1
// --a - --b  // 1-0 = 1
// --a - --b + ++b // 1+ 1 = 2 // b =0 , b incr by 1
// --a - --b + ++b + b--  // 2+1 = 3 , b will not dec because it is potdecrement


// //task03

prompt("enter name")
alert("Welcome! Rajesh")


// //task04,5

var number = +prompt("put number")
for(let i=1;i<=10;i++){
    result = i * number
    console.log(number+ "*" +i+ " " + "=" +result )


// // //task06
console.log("Subject  Total Marks  Obtained Marks  Marks Percentage")
a = prompt("Enmter subject name")
subj1 = a
obt_m1 = +prompt("Obtained marks")

b = prompt("Enmter subject name")
Subj2 = b
obt_m2 = +prompt("Obtained marks")

c = prompt("Enmter subject name")
subj3 = c
obt_m3 = +prompt("Obtained marks")

ttl_m = 100
n=3*ttl_m

sub_ttl_m = obt_m1 + obt_m2 + obt_m3

per = (sub_ttl_m /n)*100

console.log(a+ " " +ttl_m+ " " +obt_m1+ " " +obt_m1+"%")
console.log(b+ " " +ttl_m+ " " +obt_m2+ " " +obt_m2+"%")
console.log(c+ " " +ttl_m+ " " +obt_m3+ " " +obt_m3+"%")
console.log("Total: " +n+ " " +sub_ttl_m+  " " +per+"%")



// //chapt 9-11 USER INPUT & CONDITIONAL STATMENT

task01
 prompt("enter city name ")
 alert("Welcome! to the city of Lights")


// //task02

a = prompt("input gender")
if ( a == 'm' || 'M')
{
    console.log("Good Morning Sir")
}
else if( a == 'f' || 'F'){
    console.log("Good Morning Ma'am")

}
else{
    console.log("enter character correct")
}



// //task03

clr  = prompt("input Signal Color")
console.log("red \t Must stop")
console.log("Yello \t Ready to move")
console.log("Green \t Move now")


// //task04

fuel = +prompt("Enter fuel ")
if(fuel < 0.25){
    console("please refill the fuel in your car")
}
else{
    console.log("available")
}




// //task05
// ///a
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}                                                       
/////b
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// // //c
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// // //d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e
 if (true){
alert("True");
}
if (false){
alert("False");
}
///////////////////////f
if("car" < "cat"){
    alert("car is smaller than cat");
    }




// //task06

// //task07

// //chptr 12-13  "IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS"

a = +prompt("enter 1st integr")
b = +prompt("enter 2nd interger")
a>b || b>a
console.log(max(a,b))

 if(a>b){
     max(a,b)
  console.log("a is larger")
 }
 else if(a == b || b ==a){
     console.log("both are equal")

 }
 else{
     console.log("number is smaller")
 }



// //task03
a = +prompt("enter number")
if( a>0 || a == 0){
    console.log("the number is positive")
}
else  if( a<0){
    console.log("the number is negative")
}




// //task04
chr = prompt("enter character")
if( chr == 'a' || 'e' || 'i' || 'o' || 'u'){
    chr == true
    console.log("true")
}
else{
    console.log("false")
}


// //task05
a = "rajesh"
b = +prompt("enter password")




// //task06

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
console.log(greeting)
}
else{
greeting = "Good evening";
console.log(greeting)
}


// //task07
hrs = +prompt("enter time in 24 hours")
if( hrs = 1300 ){
 console.log("time is: 1:00 pm"  )
}
else if(hrs == 1400){
     console.log("time is: 2:00 pm")
}
else if(hrs == 1500){
     console.log("time is: 3:00 pm")
}
else if(hrs == 1600){
     console.log("time is: 4:00 pm")
}
else if(hrs == 1700){
     console.log("time is: 5:00 pm")
}
else if(hrs == 1800){
     console.log("time is: 6:00 pm")
}
else if(hrs == 1900){
     console.log("time is: 7:00 pm")
}
else if(hrs == 2000){
     console.log("time is: 9:00 pm")
}
else if(hrs == 2100){
     console.log("time is: 10:00 pm")
}
else if(hrs == 2200){
     console.log("time is: 11:00 pm")
}
else if(hrs == 2300){
     console.log("time is: 12:00 pm")
}
else{
     console.log("no time ")
}




// // chptr 14-16     "ARRAYS "

// //task01
_name = []

// //task02
Object = []



// task03
str =["rajesh"]

// tasak04
arr = 3

// task05
Boolean [4]

// task06
arr = ["raj", 1 , 'g']


// task07
console.log("Qualifications:")
arr = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"]
console.log("(1)" +arr[0])
console.log("(2)" +arr[1])
console.log("(3)" +arr[2])
console.log("(4)" +arr[3])
console.log("(5)" +arr[4])
console.log("(6)" +arr[5])
console.log("(7)" +arr[6])
console.log("(8)" +arr[7])



// //task08
arr = ["Rajesh" , "Baboo " , " Suhail"]
arr1  = [""]

student = arr["raj" , "baboo" , "suhail"]
score = arr1[320,230,480]
ttl_m = 500
perc = (score/ttl_m)*100
console.log("score of raj is:" ,arr[0])


// task09           (a)
arr = ["red", "green"]
console.log(arr)
alert("what color he /she want to add at the beginning")
prompt("bule or yello")
arr.unshift("blue")
console.log(arr)


// //task09           (b)
arr = ["red", "green"]
console.log(arr)
alert("what color he /she want to add at the beginning")
prompt("blue or yello")
arr.push("blue")
console.log(arr)

//task09           (c)
arr = ["red", "green"]
console.log(arr)
alert("what color he /she want to add at the beginning")
prompt("bule or yello")
arr.unshift("blue","yello")
console.log(arr)

//task09           (d)
arr = ["red", "green"]
console.log(arr)
arr.shift("red")
console.log(arr)

//task09           (e)
arr = ["red", "green"]
console.log(arr)
arr.pop("green")
console.log(arr)

//task09           (f)
arr = ["red", "green"]
prompt("Ask the user at which index he/she wants to add a color ")
 arr.push(arr[2])
 arr[2] = "yello"
console.log(arr)

//task09    (g)
arr = ["red", "green"]
prompt("Ask the user at which index he/she wants to add a color ")
 arr.pop(arr[2])
console.log(arr)


//task10        
arr = [230 ,320 , 480 , 120]
arr.sort()
console.log(arr)


//task11  
var arr = ['karachi','lahore','islamabad','quetta','peshawer']
console.log("cities list:",arr)
var slec = arr.slice(2,4)
console.log("selected cities list: " ,slec)


//task12
var arr=["this" , "is","my", "car"]
jo = arr.join()
console.log(jo)

//task13
var arr = ["keyb" , "mouse" , "printer","monitor"]


//task15
var arr = ["apple","smasung","motrolla","nokia","sony","hairer"]
document.write(arr)

//*****************Exercise01

//1
//comment can make coide readable

//2
file
var str = "rajesh"
var x = false
var y

//3
var x
var y
var z
var m


//4
var x = 4

//5
var bioData = 

//6
 arr=["rajesh" ,"kumar" ,"single","country","age"]

//7
var myAge = 20
var yourAge = 21
console.log("Iam " ,myAge, "years old")
console.log("you are" ,youAge, "years old")



//*****************************exercise02


task01,2,3,4
var username
task02
var myName = 'Rajesh kumar';
task03
var message = 'hello world'
task04
var course = 'web and app development'
alert(myName)
alert(message)
alert(course)

task05

task06
//task06
var email = 'rajeshkumarbhattia@gmail.com'

alert("my email address is " +email)


task07
var book ='A smarter way to learn JavaScript'
alert("I am trying to learn from the Book " +book)

task08
document.write("yah I can write HTML content through javaScript")

task09
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”) 
 it is undeterminated string


 //**************Exercise03*****************
 //1)
var age = +prompt("Enter your age")
 if(age == 30)
 {
     alert("you are old enough to drive")
 }
 else if(age == 15){
    alert("your left with 3 years to drive")
 }
 
//2)

var num = +prompt("Enter number")

if( num%2 == 0){
    alert("the number is even")
}
else{
    alert("num is odd")
}


3
let myAge = 250
let yourAge =  25
x = myAge - yourAge
console.log("Iam "  +x+  " years older than yoou") 

/////////////////////////////// *****End**** //////////////////////
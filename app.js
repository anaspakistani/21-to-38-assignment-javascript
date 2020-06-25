    // chapter 21-25 =target 1


 
    //  var firstname = prompt("Enter your first name");
    
    // var lastName = prompt("Enter your last name");

    // var fullName = firstname + lastName;

    // alert("Hello" + " " + fullName);

  // chapter 21-25 =target 2

    // var user = prompt("Enter your favorite mobile phone model.");

    // alert("My favorite phone is :" + " " + user + " " + "Length of string" + " " + user.length);

  // chapter 21-25 =target 3
  
    // var a = "Pakistani";

    // document.write(a + "<br>");

    // document.write("index of n is :" +" " +a.indexOf("n"));

  // chapter 21-25 =target 4

    // var a = "Hello World";

    // document.write(a + "<br>");

    // document.write("The index of last l is :" + " " + a.lastIndexOf("l")); 
    
  // chapter 21-25 =target 5

    // var a = "Pakistani";

    // document.write(a + "<br>");

    // document.write("Character at index 3 is" + " " + a[3]);

  // chapter 21-25 =target 6

    // var firstname = prompt("Enter your first name");

    // var lastName = prompt("Enter your last name");

    // var fullName = firstname.concat(lastName);

    // alert(fullName);

  // chapter 21-25 =target 7

    // var a = "Hyderabad";

    // document.write(a + "<br>");

    // document.write(a.replace("Hyder" , "Islam"));

  // chapter 21-25 =target 8
  
    //  var message = "Ali and Sami are best friends. They play cricket and football together.";

    //  var a = message.replace("and" , "&");  

    //  document.write(a);

  // chapter 21-25 =target 9

    // var string = "472";

    // document.write("String" + " " + string + "<br>");

    // var number = 472;

    // document.write("Number" + " " + number + "<br>");

    // var replase = parseInt(string);

    // document.write("After replacement" + " " + replase);

  // chapter 21-25 =target 10

    // var a = prompt("Enter a string");

    // document.write(a + "<br>");

    // var b = a.toUpperCase(a);

    // document.write(b);

  // chapter 21-25 =target 11

    // var a = prompt("Enter a string");

    // document.write(a + "<br>");

    // var b = a.toUpperCase(a);

    // document.write("Title case" + " " + b);    

  // chapter 21-25 =target 12

    // var a = 35.36;

    // document.write(a + "<br>");
  
    // var b = a.toString();

    // document.write(b + "<br>");

    // document.write((a + '').replace('.' , ''));

  // chapter 21-25 =target 13

    // var user = prompt();

    // var a = String.fromCharCode(64);

    // var b = String.fromCharCode(46);

    // var c = String.fromCharCode(44);

    // var d = String.fromCharCode(33);

    // if(user.match(a) || user.match(b) || user.match(c) || user.match(d)){

    //     alert("Enter valid name");
    // }
    // else{
    //     alert("Hello" + user);
    // }

  // chapter 21-25 =target 14

    // var user = prompt();

    // var arr = ["apple pie" , "cake" , "cookie" , "chips" , "patties"];

    // if(user === arr[0] || user === arr[1] || user === arr[2] || user === arr[3] || user === arr[4]){

    //     alert(user + " " + "is available at index of" + " " + arr.indexOf(user));
    // }
    // else{
    //     alert("not found");
    // }


//  chapter 26-30 =target 1


    // var a = parseInt(prompt("Enter positive number"));

    // document.write(a + "<br");

    // var roundof = Math.round(a);

    // document.write(roundof + "<br>");

    // var floor = Math.floor(a);

    // document.write(floor + "<br>");

    // var ceil = Math.ceil(a);

//  chapter 26-30 =target 2

    // var a = parseInt(prompt("Enter negative number"));

    // document.write(a + "<br");

    // var roundof = Math.round(a);

    // document.write(roundof + "<br>");

    // var floor = Math.floor(a);
    
    // document.write(floor + "<br>");

    // var ceil = Math.ceil(a);

//  chapter 26-30 =target 3

    // var a = -4;

    // var b = Math.abs(a);

    // document.write(b);

//  chapter 26-30 =target 4

    // var diceRoll = Math.floor( Math.random() * 6 ) +1;

    // document.write('You rolled a ' + diceRoll);

//  chapter 26-30 =target 5

    // var coin = Math.floor(Math.random()*2) +1;

    // if(coin === 2){
      
    //     document.write("head");
    // }
    // else {
    //     document.write("tail");
    // }

//  chapter 26-30 =target 6

    // var rendom = Math.floor(Math.random()*100);

    // document.write("Rendom number between 1 to 100 is" + " " + rendom);

//  chapter 26-30 =target 7

    // var user = prompt("Enter your weight");

    // document.write("Your weight is" + " " + user + "kilograms");

//  chapter 26-30 =target 8

    // var user = parseInt(prompt("Guess the secret number in 1 to 10"));

    // var secNo = 6;

    // if(user === secNo){
    //     alert("Congrulations");
    // }
    // else {
    //     alert("Sorry");
    // }
            //  chapter 31-34 =target 01

// 
    // var a = new Date();
    // document.write(a);    

//  chapter 31-34 =target 02

    // var a = new Date();
    // a.setMonth(6);
    // document.write(a);    

//  chapter 31-34 =target 03

    // var a = new Date();
    // a.setDate(2);
    // alert(a);

//  chapter 31-34 =target 04

    // var day = new Date().getDay();
    // if(day === 0 || day === 7){
    //     alert("Its fun day");
    // }
    // else {
    //     alert("working day")
    // }

//  chapter 31-34 =target 05

//    var a = new Date();
//    var b = a.getDate();
//    if (b <= 15){
//        document.write("first fifteen days of the month");
//    }
//    else {
//        document.write("last fifteen days of the month");
//    }

//  chapter 31-34 =target 06

    // var current = new Date();
    // document.write("current time" +" "+ current + "<br>");
    // var minute = Math.round(current.getTime() / 1000);
    // document.write("minute since 1, junuary, 1970" + " " + minute);

//  chapter 31-34 =target 07

    // var a = new Date().getHours();
    // if(a === 0 || a < 12){
    //     alert("its AM");
    // }   
    // else if (a >= 12){
    //     alert("its PM");
    // }

//  chapter 31-34 =target 08

    // var a = new Date();
    // document.write(a + "<br>");
    // var b = new Date();
    // b.setMonth(11);
    // b.setDate(31);
    // document.write(b);

//  chapter 31-34 =target 09

    // var a = new Date();
    // var aa = a.getTime();
    // document.write(a + "<br>");
    // var b = new Date("jun 18 , 2015");
    // var bb = b.getTime();
    // document.write(b + "<br>");
    // var c = aa - bb;
    // document.write(Math.floor(c / (1000*60*60*24)) + " " + "day have passed since 1st ramdan , 2015");


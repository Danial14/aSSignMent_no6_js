// Chapter 21-25
//  Task no1
/* var fullNaMe = prompt("Enter your first naMe") + " " + prompt("Enter your last naMe");
alert("Hello " + fullNaMe); */

// Task no2
/* var favouriateMobile = prompt("Enter your favouriate Mobile phone Model");
createParagraph().innerHTML = "My favouriate Mobile phone is: " + favouriateMobile;
createParagraph().innerHTML = "Length of String is: " + favouriateMobile.length; */

// Task no3
/* var MyCountry = "Pakistani";
createParagraph().innerHTML = "String: " + MyCountry;
createParagraph().innerHTML = "Index of 'n': " + MyCountry.indexOf("n"); */

// Task no4
/* var str = "Hello World";
createParagraph().innerHTML = "String: " + str;
createParagraph().innerHTML = "Index of 'l': " + str.lastIndexOf("l"); */

// Task no5
/* var MyCountry = "Pakistani";
createParagraph().innerHTML = "String: " + MyCountry;
createParagraph().innerHTML = "Character at index 3 is: " + MyCountry.charAt(3); */

// Task no6
/* var fullNaMe = prompt("Enter your first naMe").concat(" ").concat(prompt("Enter your last naMe"));
alert("Hello ".concat(fullNaMe)); */

// Task no7
/* var city = "Hyderabad";
createParagraph().innerHTML = "City: " + city;
createParagraph().innerHTML = "After replaceMent: ".concat(city.replace("Hyder", "IslaM")); */

// Task no8
/* var Message = "Ali and Sami are best friends. They play cricket and football together.";
createParagraph().innerHTML = "Message: " + Message;
createParagraph().innerHTML = "After replaceMent: ".concat(Message.replace(/and/g, "&")); */

// Task no9
/* var value = "472";
createParagraph().innerHTML = "Value: " + value;
createParagraph().innerHTML = "Type: " + typeof value;
value = parseInt(value);
createParagraph().innerHTML = "Value: " + value;
createParagraph().innerHTML = "Type: " + typeof value; */

// Task no10
/* var userInput = prompt("Enter Message");
createParagraph().innerHTML = "User input: " + userInput;
createParagraph().innerHTML = "Uppercase : " + userInput.toUpperCase(); */

// Task no11
/* var userInput = prompt("Enter Message");
var firstChar = userInput.charAt(0).toUpperCase();
createParagraph().innerHTML = "User input: " + userInput;
createParagraph().innerHTML = "title case : " + firstChar.concat(userInput.slice(1)); */ 

// Task no12
/* var nuM = 35.36;
var str = nuM.toString();
var res = str.replace(".", "");
createParagraph().innerHTML = "NuMber: " + str;
createParagraph().innerHTML = "Result: " + res; */

// Task no13
/* var naMe = prompt("Enter your naMe");
for(var i = 0; i < naMe.length; i++){
    var char = naMe.charAt(i);
    if(char == "!" || char == "@" || char == "." || char == ","){
        alert("Please enter a valid naMe");
        break;
    }
} */

// Task no14
/* var iteMS = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter iteM to Search").toLowerCase();
var iteMAvailability = false;
var index;
for(var i = 0; i < iteMS.length; i++){
    if(iteMS[i] == userInput){
        iteMAvailability = true;
        index = i;
        break;
    }
}
if(iteMAvailability){
    createParagraph().innerHTML = userInput + " is available in our bakery at index " + index;
}
else{
    createParagraph().innerHTML = userInput + " is not available in our bakery";
} */

// Task no15
/* var password = prompt("Enter password");
var firstChar = password.charCodeAt(0);
if(firstChar >= 48 && firstChar <= 57){
    alert("Invalid password. Password should not begin with nuMber");
}
else{
    if(password.length < 6){
        alert("Invalid password. Password should be of 6 or More character long");
    }
    else{
        var alphabetCounter = 0;
        for(var i = 0; i < password.length; i++){
            var code = password.charCodeAt(i);
            if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
                alphabetCounter++;
                break;
            }
        }
        if(alphabetCounter > 0){
            var nuMberCounter = 0;
            for(var i = 0; i < password.length; i++){
                var code = password.charCodeAt(i);
                if((code >= 48 && code <= 57)){
                    nuMberCounter++;
                    break;
                }
            }
            if(nuMberCounter > 0){
                alert("Password is valid");
            }
            else{
                alert("Password is invalid. It should contain alphabet and nuMberS both");
            }   
        }
        else{
            alert("Password is invalid. It should contain alphabet and nuMberS both");
        }
    }
} */

// Task no16
/* var university = "University of Karachi";
var arr = university.split(" ");
for(var i = 0; i < arr.length; i++){
    var str = arr[i];
    for(var j = 0; j < str.length; j++){
        createParagraph().innerHTML = str.charAt(j);
    }
    createLineBreaks();
} */

// Task no17
/* var userInput = prompt("Enter Message");
createParagraph().innerHTML = "User input: " + userInput;
createParagraph().innerHTML = "Last character of user input: " + userInput.charAt(userInput.length - 1); */

// Task no18
/* var str = "The quick brown fox juMps over the lazy dog";
var teMpStr = str;
var occurence = 0;
for(var i = 0; i < str.length; i++){
    var index = str.search(/the/i);
    if(index > -1){
        occurence++;
        str = str.slice(index + 3);
    }
    else{
        break;
    }
}
createParagraph().innerHTML = "Text: The quick brown fox juMpS over the lazy dog";
createParagraph().innerHTML = "There are " + occurence + " occurences of word 'the'"; */

// Chapters 26-30

// Task no1
/* var nuMber = parseFloat(prompt("Enter positive nuMber"));
if(!isNaN(nuMber) && nuMber > 0){
    createParagraph().innerHTML = "nuMber: " + nuMber;
    createParagraph().innerHTML = "round off value: " + Math.round(nuMber);
    createParagraph().innerHTML = "floor value: " + Math.floor(nuMber);
    createParagraph().innerHTML = "ceil value: " + Math.ceil(nuMber);
}
else{
    alert("Please enter a valid positive nuMber");
} */

// Task no2
/* var nuMber = parseFloat(prompt("Enter negative nuMber"));
if(!isNaN(nuMber) && nuMber < 0){
    createParagraph().innerHTML = "nuMber: " + nuMber;
    createParagraph().innerHTML = "round off value: " + Math.round(nuMber);
    createParagraph().innerHTML = "floor value: " + Math.floor(nuMber);
    createParagraph().innerHTML = "ceil value: " + Math.ceil(nuMber);
}
else{
    alert("Please enter a valid negative nuMber");
} */

// Task no3
/* var nuMber = parseFloat(prompt("Enter nuMber"));
if(!isNaN(nuMber)){
    createParagraph().innerHTML = "The absolute value of " + nuMber + " is " + Math.abs(nuMber);
}
else{
    alert("Please enter a valid nuMber");
} */

// Task no4
/* var randoMNuMber = Math.random();
var diceNuM = Math.floor((randoMNuMber * 6) + 1);
createParagraph().innerHTML = "RandoM dice: " + diceNuM; */

// Task no5
/* var randoMNuMber = Math.random();
var tossNuM = Math.floor((randoMNuMber * 2) + 1);
createParagraph().innerHTML = tossNuM;
switch(tossNuM){
    case 1:
        createParagraph().innerHTML = "randoM coin value: Heads";
        break;
    case 2:
        createParagraph().innerHTML = "randoM coin value: Tails";
        break;
} */

// Task no6
/* var randoMNuMber = Math.random();
var nuMber = Math.floor((randoMNuMber * 100) + 1);
createParagraph().innerHTML = "randoM nuMber between 1 and 100: " + nuMber; */

// Task no7
/* var userWeight = parseFloat(prompt("Enter your weight in kilograMS"));
if(!isNaN(userWeight)){
    createParagraph().innerHTML = "Your weight is " + userWeight + " kilograMS";
}
else{
    alert("Please enter valid weight");
} */

// Task no8
/* var randoMSecretNuMber = Math.floor((Math.random() * 10) + 1);
var userInput = parseInt(prompt("Enter nuMber between 1 to 10"));
if(!isNaN(userInput) && (userInput >= 1 && userInput <= 10)){
    if(userInput == randoMSecretNuMber){
        alert("Congratulations you enter correct nuMber");
    }
    else{
        alert("Try again");
    }
}
else{
    alert("Please enter a valid nuMber");
} */

// Chapters 31-34

// Task no1
/* var dateToday = new Date();
createParagraph().innerHTML = dateToday.toString(); */

// Task no2
/* var MonthS = ["January", "Feburary", "March", "April", "May", "June", "July", "August"
, "SepteMber", "October", "NoveMber", "DeceMber"];
var dateToday = new Date();
createParagraph().innerHTML = "Current Month: " + MonthS[dateToday.getMonth()]; */

// Task no3
/* var dateToday = new Date();
var dayS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
createParagraph().innerHTML = "Today is " + dayS[dateToday.getDay()]; */

// Task no4
/* var dateToday = new Date();
var dayS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = dateToday.getDay();
if(day == 0 || day == dayS.length - 1){
    alert("It's fun day");
}
else{
    alert("It's work day");
} */

// Task no5
/* var dateToday = new Date();
if(dateToday.getDate() < 16){
    alert("First fifteen dayS");
}
else{
    alert("Last fifteen dayS");
} */

// Task no6
/* var dateToday = new Date();
var Milli = dateToday.getTime();
createParagraph().innerHTML = "Current date: " + dateToday.toString();
createParagraph().innerHTML = "Elapsed MilliSecondS Since january 1, 1970: " + Milli;
createParagraph().innerHTML = "Elapsed Minutes Since january 1, 1970: " + Math.floor(Milli / 1000 * 60); */

// Task no7
/* var dateToday = new Date();
var hours = dateToday.getHours();
if(hours >= 0 && hours < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
} */

// Task no8
/* var dateLater = new Date("DeceMber 31, 2020");
createParagraph().innerHTML = "Later date: " + dateLater.toString(); */

// Task no9
/* var pastDate = new Date("April 25, 2020");
var pastDateTwo = new Date("June 18, 2015");
var diff = pastDate.getTime() - pastDateTwo.getTime();
alert("Days passed Since RaMzan of 2015: " + Math.floor(diff / (1000 * 60 * 60 * 24))); */

// Task no10
/* var soMeDate = new Date("DeceMber 5, 2015");
var soMeDateTwo = new Date("January 1, 2015");
var diff = soMeDate.getTime() - soMeDateTwo.getTime();
createParagraph().innerHTML = "On reference date " + soMeDate;
createParagraph().innerHTML = Math.floor(diff / 1000) + " SecondS had passed Since beginning of 2015"; */

// Task no11
/* var dateToday = new Date();
createParagraph().innerHTML = "current date: " + dateToday.toString();
dateToday.setHours(dateToday.getHours() + 1);
createLineBreaks();
createParagraph().innerHTML = "After 1 the date will be " + dateToday.toString(); */

// Task no12
/* var dateToday = new Date();
createParagraph().innerHTML = "current date: " + dateToday.toString();
dateToday.setFullYear(dateToday.getFullYear() - 100);
createLineBreaks();
createParagraph().innerHTML = "100 years back the date was " + dateToday.toString(); */

// Task no13
/* var userAge = parseInt(prompt("Enter your age"));
if(isNaN(userAge) || userAge < 0){
    alert("Please enter valid age");
}
else{
    var year;
    var dateToday = new Date();
    var currentYear = dateToday.getFullYear();
    var MonthS = ["january", "feburary", "march", "april", "may", "june", "july", "augest"
    , "september", "october", "november", "december"];
    var birthdayMonth = prompt("Enter your birthday Month").toLowerCase();
    var currentMonth = dateToday.getMonth();
    var birthMonth;
    for(var i = 0; i < MonthS.length; i++){
        if(MonthS[i] == birthdayMonth){
            birthMonth = i;
            break;
        }
    }
    var diff = birthMonth - currentMonth;
    if(diff > 0){
        increMentAge();
    }
    else if(diff == 0){
        var dob = parseInt(prompt("Enter your date of birth but don't enter your birth year"));
        var sysDate = dateToday.getDate();
        if(sysDate < dob){
            increMentAge();
        }
        else{
            dontIncreaseAge();
        }
    }
    else{
        dontIncreaseAge();
    }
    function increMentAge(){
        year = currentYear - (userAge + 1);
    }
    function dontIncreaseAge(){
        year = currentYear - userAge;
    }
    createParagraph().innerHTML = "Your age is: " + userAge;

    createParagraph().innerHTML = "Your birth year is: " + year;
} */

// Task no14
/* var MonthS = ["January", "Feburary", "March", "April", "May", "June", "July", "Augest"
    , "September", "October", "November", "December"];
var Month = MonthS[new Date().getMonth()];
var custoMerNaMe = "ABC";
var nuMberOfUnits = 250.00;
var chargesPerUnit = 2.00;
var netAMount = parseFloat((chargesPerUnit * nuMberOfUnits).toFixed(2));
var latePayMentSurcharge = 20.00;
var grossAMountAfterDueDate = parseFloat((netAMount + latePayMentSurcharge).toFixed(2));
createHeading().innerHTML = "K-Electric Bill";
createParagraph().innerHTML = "CustoMer naMe: " + custoMerNaMe;
createParagraph.innerHTML = "Month: " + Month;
createParagraph().innerHTML = "NuMber of units: " + nuMberOfUnits;
createParagraph().innerHTML = "Charges per unit: " + chargesPerUnit;
createLineBreaks();
createParagraph().innerHTML = "Net AMount payable with in due date: " + netAMount;
createParagraph().innerHTML = "Late payMent Surcharge: " + latePayMentSurcharge;
createParagraph().innerHTML = "Gross aMount payMent after due date: " + grossAMountAfterDueDate; */

// Chapter 35-38
// Taskno1
/* function displayDate(){
    createParagraph().innerHTML = "Today date is: " + new Date().toString();
}
displayDate(); */

// Task no2
/* function greetUser(firstNaMe, lastNaMe){
    alert("Hello " + firstNaMe + " " + lastNaMe);
}
greetUser(prompt("Enter your first naMe"), prompt("Enter your last naMe")); */

// Task no3
/* function add(nuM1, nuM2){
    return nuM1 + nuM2;
}
var nuM1 = parseFloat(prompt("Please enter first nuMber"));
var nuM2 = parseFloat(prompt("Please enter second nuMber"));
if(isNaN(nuM1) || isNaN(nuM2)){
    alert("Please enter valid nuMber");
}
else{
    alert(add(nuM1, nuM2));
} */

// Task no4
/* function calculate(nuM1, nuM2, operator){
    switch(operator){
        case "+":
            return nuM1 + nuM2;
        case "-":
            return nuM1 - nuM2;
        case "*":
            return nuM1 * nuM2;
        case "/":
            return nuM1 / nuM2;
        case "%":
            return nuM1 % nuM2;
        default:
            alert("Please enter valid operator");
    }
}
var nuM1 = parseFloat(prompt("Please enter first nuMber"));
var nuM2 = parseFloat(prompt("Please enter second nuMber"));
var operator = prompt("Please enter operator");
if(isNaN(nuM1) || isNaN(nuM2)){
    alert("Please enter valid nuMber");
}
else{
    var result = calculate(nuM1, nuM2, operator);
    if(result != undefined){
        alert(result);
    }
} */

// Task no5
/* function square(nuM1){
    alert(nuM1 * nuM1);
}
var nuM1 = parseFloat(prompt("Please enter first nuMber"));
if(isNaN(nuM1)){
    alert("Please enter valid nuMber");
}
else{
    square(nuM1);
} */

// Task no6
/* function calculateFactorial(nuM){
    if(nuM == 1){
        return 1;
    }
    else{
        return nuM *= calculateFactorial(nuM - 1);
    }
}
var nuM1 = parseFloat(prompt("Please enter first nuMber"));
if(isNaN(nuM1)){
    alert("Please enter valid nuMber");
}
else{
    alert(calculateFactorial(nuM1));
} */

// Task no7
/* function displayCounting(Start, end){
    for(var i = Start; i <= end; i++){
        createParagraph().innerHTML = i;
    }
}
var Start = parseFloat(prompt("Please enter first nuMber"));
var end = parseFloat(prompt("Please enter second nuMber"));
if(isNaN(Start) || isNaN(end)){
    alert("Please enter valid nuMber");
}
else{
    displayCounting(Start, end);
} */

// Task no8
/* function calculateHypotenuse(base, perpendicular){
    var squareOfHypo = calculateSquare(base) + calculateSquare(perpendicular);
    alert("Hypotenuse is: " + squareOfHypo);
    function calculateSquare(nuM){
        return nuM * nuM;
    }
}
var base = parseFloat(prompt("Please enter first nuMber"));
var perpendicular = parseFloat(prompt("Please enter second nuMber"));
if(isNaN(base) || isNaN(perpendicular)){
    alert("Please enter valid nuMber");
}
else{
    calculateHypotenuse(base, perpendicular);
} */

// Task no9
/* function areaOfRectangle(width, height){
    alert("Area of rectangle is: " + width * height);
}
var width = 3;
var height = 1.5;
areaOfRectangle(3, height);
areaOfRectangle(6, 3); */

// Task no10
/* var userInput = prompt("Enter any word");
var wordLength = userInput.length;
if(wordLength == 1){
    alert(userInput + " is a palindroMe word");
}
else if(wordLength == 0){
    alert("Please input a word");
}
else if(wordLength > 1){
    userInput = userInput.toLowerCase();
    if(wordLength % 2 != 0){
        var loopLiMit = Math.floor(wordLength / 2);
        checkPalindroMe(loopLiMit);
    }
    else{
        var loopLiMit = wordLength / 2;
        checkPalindroMe(loopLiMit);
    }
    function checkPalindroMe(loopLiMit){
        var palindroMe = true;
        for(var i = 0; i < loopLiMit; i++){
            if(userInput.charAt(i) != userInput.charAt(wordLength - (i + 1))){
                palindroMe = false;
                alert(userInput + " is not a palindroMe word");
                break;
            }
        }
        if(palindroMe){
            alert(userInput + " is a palindroMe word");
        }
    }
} */

// Task no11
/* var userInput = prompt("Enter any string");
var len = userInput.length;
if(len > 0){
    var str = userInput.split(" ");
    for(var i = 0; i < str.length; i++){
        var st = str[i];
        str[i] = st.charAt(0).toUpperCase() + st.slice(1);
        console.log(str[i]);
    }
    createParagraph().innerHTML = "ExaMple string: " + userInput;
    var newStr = "";
    for(var j = 0; j < str.length; j++){
        newStr = newStr + str[j] + " ";
    }
    createParagraph().innerHTML = "New string: " + newStr;
} */

// Task no12
/* var userInput = prompt("Enter any string");
var len = userInput.length;
if(len > 0){
    createParagraph().innerHTML = "SaMple string is: " + userInput;
    if(userInput.indexOf(" ") == -1){
        createParagraph().innerHTML = "Greatest string in length is: " + userInput;
    }
    else{
        var stringArray = userInput.split(" ");
        var greatestString = stringArray[0];
        var greatest = false;
        for(var i = 0; i < stringArray.length;){
            for(var j = ++i; j < stringArray.length; j++){
                if(greatestString.length < stringArray[j].length){
                    if(!greatest){
                        greatest = true;
                    }
                    greatestString = stringArray[j];
                    i = j;
                    break;
                }
                else if(greatestString.length > stringArray[j].length){
                    if(j == stringArray.length - 1){
                        greatest = true;
                        i = stringArray.length - 1;
                    }
                }
            }
        }
        if(greatest){
            createParagraph().innerHTML = "Greatest string in length is: " + greatestString;
        }
        else{
            createParagraph().innerHTML = "All strings are equal in length";
        }
    }
}
else{
    alert("Please enter some string");
} */

// Task no13
/* function countLetter(sentence, letterToBeCounted){
    var teMpSentence = sentence;
    var occurence = 0;
    for(var i = 0; i < sentence.length; i++){
        var index = teMpSentence.indexOf(letterToBeCounted);
        if(index == -1){
            alert("Occurence of " + letterToBeCounted + " is " + occurence);
            break;
        }
        else{
            occurence++;
            teMpSentence = teMpSentence.slice(index + 1);
        }
    }
}
countLetter("MUHAMMAD", "M"); */

// Task no14
/* var pi = 3.14;
function calcCircuMference(radius){
    alert("Circumference of circle " + (2 * pi + radius).toFixed(2));
}
function areaOfCircle(radius){
    alert("Area of circle " + (pi * radius * radius).toFixed(2));
}
calcCircuMference(4);
areaOfCircle(4); */
function createParagraph(){
    var p = document.createElement("p");
    document.body.appendChild(p);
    return p;
}
function createHeading(){
    var heading = document.createElement("h1");
    document.body.appendChild(heading);
    return heading;
}
function createLineBreaks(){
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));
}
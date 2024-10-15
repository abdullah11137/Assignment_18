// Chapter 31 - 34 (Date & Time)


// Q1


// let dObj = new Date();



// Q2



// let dStr = new Date().toString();



// Q3



// var d = new Date();
// var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var day = dayOfWeek[d.getDay()]
// console.log(day)


// Q4



// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = new Date().getDay();
// alert("Today is " + dayNames[day]);



// Q5



// let d = new Date();
// let year = d.getFullYear();
// let month = d.getMonth() + 1;
// let dayOfMonth = d.getDate();
// let hours = d.getHours();
// let minutes = d.getMinutes();
// let seconds = d.getSeconds();
// let milliseconds = d.getMilliseconds();


// Q6



// let later = new Date(2020, 11, 31);



// Q7



// let birthday = new Date(1992, 1, 2);



// Q8



// alert(new Date() - new Date(1980, 0, 1));




// Q9



// var date = new Date();
// date.setFullYear(2022);
// console.log(date)



// Q10



// function changeMonthToJanuary(date) {
//     date.setMonth(0);
//     return date;
//   }
  
//   let currentDate = new Date();
//   let newDate = changeMonthToJanuary(currentDate);
//   console.log("New date:", newDate);



// Q11



// let date = new Date();
// date.setDate(25);
// console.log(date);


// Q12



// function changeMinutes(date, newMinutes){
//     date.setMinutes(newMinutes);
//     return date;
// }

// var currentDate = new Date();
// var newDate = changeMinutes(currentDate, 28)
// console.log(newDate)



// Q13



// function addHours(date, hours){
//     date.setHours(date.getHours()+hours);
//     return date;
// }

// var currentDate = new Date();
// var newDate = addHours(currentDate, 6)
// console.log(newDate)



// Q14



// var birthYear = +prompt("Enter the year of your birth:");
// var date = new Date();
// var currentYear = date.getFullYear();
// var age = currentYear - birthYear;
// console.log(`Your age is ${age}`)



// Chapter 35 - 37 (Functions)



// Q1


// function displayAlert() {



// Q2



// function askName(userName){
//     return userName;
// }

// var userName = askName(prompt("Enter name"));
// console.log(userName)



// Q3



// function mainFunction() {
//     function1();
//     function2();
//   }


// Q4


// function displayAlert(userName){
//     return userName;
// }

// var userName = displayAlert(prompt("Enter name:"))
// alert(userName)



// Q5



// function concat(a, b, c) {



// Q6



// function concatenateStrings(string1, string2) {
//   let concatenatedString = string1 + string2;
//   return concatenatedString;
// }



// Q7



// function multiplyNumbers(num1, num2, num3) {
//     let result = num1 * num2 * num3;
//     return result;
//   }



// Q8



// function calculateAverage(numbers){
//     if (numbers.length===0){
//         return 0;
//     }
//     var sum = 0;
//     for (var i=0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
// }

// var averageValue = calculateAverage([1, 2, 3, 4, 5]);
// console.log(`The average of the numbers is: ${averageValue}`)



// Q9



// function addNumbers(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
//   }
 
//   const result = addNumbers(5, 10);
//   console.log("The sum of 5 and 10 is:", result);



// Q10



// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0; // Handle empty array case
//     }
  
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     const average = sum / numbers.length;
//     return average;
//   }
  
//   const myNumbers = [1, 2, 3, 4, 5];
//   const averageValue = calculateAverage(myNumbers);
//   console.log("The average of the numbers is:", averageValue);



// Q11



// function greet(name){
//     return "Hello, " + name + "!";
// }

// var greetings = greet("Abdullah Kaimkhani");
// console.log(greetings)



// Q12



// function countLetterOccurrences(word) {
//     const letterCounts = {};
  
//     for (const letter of word.toLowerCase()) {
//       letterCounts[letter] = (letterCounts[letter] || 0) + 1;
//     }
  
//     return letterCounts;
//   }

//   var counts = countLetterOccurrences(prompt("Enter any word"))
//   console.log(counts)



// Q13



// function setYearInDateObject(dateObject, year) {
//     dateObject.setFullYear(year);
//   }
  
//   // Example usage:
//   const currentDate = new Date();
//   setYearInDateObject(currentDate, 2023);
//   console.log(currentDate);



// Q14



// function calculateAge(dateOfBirth) {
//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);
  
//     let age = today.getFullYear() - birthDate.getFullYear();
//     return age;
// }

// var age = calculateAge(prompt("Enter your DOB in the format (Year-Month-Date)"))
// console.log(`Your age is: ${age}`)


// Q15


// function isWordInArray(word,array){
//     for (var i = 0; i<array.length; i++){
//         if(array[i]===word){
//             return true;
//         }
//     }
//     return false;
// }

// var name = prompt("Enter your name:")
// var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var result = isWordInArray(name, array);
// console.log(result)



// Q16



// function repeatLetter(letter, times){
//     return letter.repeat(times);
// }

// var letter = prompt("Enter any letter:")
// var times = 10;
// var repeatedLetter = repeatLetter(letter, times)
// console.log(repeatedLetter)



// Q17



// function reverseArray(array) {
//     return array.reverse();
//   }
  
//   const array = ['a', 'b', 'c', 'd', 'e'];
//   const reversedArray = reverseArray(array);
//   console.log(reversedArray);



// Chapter 38 (Local vs. Global Variables)



// Q1


// function greet(name) {
//     var greeting = "Hello, " + name + "!"; // Local variable
//     console.log(greeting);
//   }
  
//   greet("Abdullah Kaimkhani");



// Q2


// let globalVariable = "I'm a global variable";

// function myFunction() {
//   console.log(globalVariable); // Accessing the global variable
// }

// myFunction();



// Chapter 39, 40 (Switch Statements)



// Q1



// let dayOfWeek = prompt("Enter the day of week");

// switch (dayOfWeek) {
//   case "Monday":
//     console.log("It's Monday, time for work!");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("It's a weekday, let's get things done!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("It's the weekend, time to relax!");
//     break;
//   default:
//     console.log("Invalid day of the week.");
// }



// Q2



// let cityName = prompt("Enter a city name:");

// switch (cityName.toLowerCase()) {
//   case "karachi":
//     alert("You entered Karachi!");
//     break;
//   case "lahore":
//     alert("You entered Lahore!");
//     break;
//   case "islamabad":
//     alert("You entered Islamabad!");
//     break;
//   default:
//     alert("City not found.");
// }



// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |



// Q1



// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
//   const base = 2;
//   const exponent = 3;
//   const result = power(base, exponent);
//   console.log(`${base} raised to the power of ${exponent} is ${result}`);



// Q2



// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
  
//   var year = prompt("Enter the year");
//   const isLeap = isLeapYear(year);
//   if (isLeap) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }



// Q3



// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   function getTriangleSides() {
//     const a = parseFloat(prompt("Enter the length of side a:"));
//     const b = parseFloat(prompt("Enter the length of side b:"));
//     const c = parseFloat(prompt("Enter the length of side c:"));
//     return { a, b, c };
//   }
  
//   const { a, b, c } = getTriangleSides();
//   const area = calculateTriangleArea(a, b, c);
//   console.log("The area of the triangle is:", area);



// Q4



// function calculateAverage(marks) {
//     const sum = marks.reduce((acc, curr) => acc + curr, 0);
//     const average = sum / marks.length;
//     return average;
//   }
  
//   function calculatePercentage(marks, totalMarks) {
//     const sum = marks.reduce((acc, curr) => acc + curr, 0);
//     const percentage = (sum / totalMarks) * 100;
//     return percentage;
//   }
  
//   function mainFunction() {
//     const subject1Marks = parseFloat(prompt("Enter marks for Subject 1:"));
//     const subject2Marks = parseFloat(prompt("Enter marks for Subject 2:"));
//     const subject3Marks = parseFloat(prompt("Enter marks for Subject 3:"));
  
//     const marks = [subject1Marks, subject2Marks, subject3Marks];
//     const totalMarks = marks.length * 100; // Assuming 100 marks per subject
  
//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks, totalMarks);
  
//     console.log("Average Marks:", average);
//     console.log("Percentage:", percentage);
//   }
  
//   mainFunction();



// Q5



// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   const string = "Hello, world!";
//   const character = "o";
//   const index = customIndexOf(string, character);
//   console.log(`The index of '${character}' in '${string}' is ${index}`);



// Q6



// function deleteVowels(sentence) {
//     let result = "";
//     const vowels = ["a", "e", "i", "o", "u"];
  
//     for (let i = 0; i < sentence.length; i++) {
//       if (!vowels.includes(sentence[i].toLowerCase())) {
//         result += sentence[i];
//       }
//     }
  
//     return result;
//   }
  
//   const sentence = "This is a sentence with vowels.";
//   const result = deleteVowels(sentence);
//   console.log(result);



// Q7


// function countVowelPairs(text) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
  
//     for (let i = 0; i < text.length - 1; i++) {
//       const char1 = text[i].toLowerCase();
//       const char2 = text[i + 1].toLowerCase();
  
//       if (vowels.includes(char1) && vowels.includes(char2)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const text = "Pleases read this application and give me gratuity";
//   const vowelPairsCount = countVowelPairs(text);
//   console.log("Number of vowel pairs:", vowelPairsCount);



// Q8



// function convertKmToMeters(km) {
//     return km * 1000;
//   }
  
//   function convertKmToFeet(km) {
//     return km * 3280.84;
//   }
  
//   function convertKmToInches(km) {
//     return km * 39370.1;
//   }
  
//   function convertKmToCentimeters(km) {
//     return km * 100000;
//   }
  
//   // Example usage:
//   const distanceKm = parseFloat(prompt("Enter the distance in kilometers:"));
  
//   const distanceMeters = convertKmToMeters(distanceKm);
//   const distanceFeet = convertKmToFeet(distanceKm);
//   const distanceInches = convertKmToInches(distanceKm);
//   const distanceCentimeters = convertKmToCentimeters(distanceKm);
  
//   console.log("Distance in meters:", distanceMeters);
//   console.log("Distance in feet:", distanceFeet);
//   console.log("Distance in inches:", distanceInches);
//   console.log("Distance in centimeters:", distanceCentimeters);



// Q9



// function calculateOvertimePay(hoursWorked, hourlyRate) {
//     const regularHours = Math.min(hoursWorked, 40);
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimeRate = 12.00;
  
//     const regularPay = regularHours * hourlyRate;
//     const overtimePay = overtimeHours * overtimeRate;
  
//     return regularPay + overtimePay;
//   }
  
//   const hoursWorked = 45;
//   const hourlyRate = 10.00;
//   const totalPay = calculateOvertimePay(hoursWorked, hourlyRate);
//   console.log("Total Pay:", totalPay); 



// Q10


// function calculateNotes(amount) {
//     const denominations = [100, 50, 10];
//     const noteCounts = [4, 1, 2];
//     const notesToDispense = [];
  
//     for (let i = 0; i < denominations.length; i++) {
//       const denomination = denominations[i];
//       const availableNotes = noteCounts[i];
//       const notesNeeded = Math.floor(amount / denomination);
//       const notesToGive = Math.min(availableNotes, notesNeeded);
//       notesToDispense.push(notesToGive);
//       amount -= notesToGive * denomination;
//     }
  
//     return notesToDispense;
//   }
  
//   // Example usage:
//   const withdrawalAmount = parseInt(prompt("Enter the withdrawal amount in hundreds:"));
//   const notes = calculateNotes(withdrawalAmount);
  
//   console.log("Number of 100 notes:", notes[0]);
//   console.log("Number of 50 notes:", notes[1]);
//   console.log("Number of 10 notes:", notes[2]);


// function deleteRow(button){
//     var row = button.parentNode.parentNode;
//         row.parentNode.removeChild(row);
// }


var counter = 0;

function increaseCounter(){
    counter++;
    updateCounterDisplay();
}

function decreaseCounter() {
    counter--;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    document.getElementById('counterValue').innerText = counter;
}



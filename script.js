
//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

/*
var favoriteMovies = ['The English Patient', 'Blue', 'Red', 'Ghost', 'The Beach'];
window.console.log(favoriteMovies[1]);
*/

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

/*
var movies = [];
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';

window.console.log(movies[0]);
*/

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

/*
var movies = [];
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';

movies.splice(3, 0, 'You and I');

window.console.log(movies.length);
*/


//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

/*
var movies = [];
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';

delete movies[0];
window.console.log(movies);

*/

//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

/*
var movies = [];
var i;
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';
movies[5] = 'You and I';
movies[6] = 'The Deep';

for(i = 0; i < movies.length; i++) {
window.console.log(movies[i]);
}

*/

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

/*
var movies = [];
var i;
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';
movies[5] = 'You and I';
movies[6] = 'The Deep';

for (var index in movies) {
    console.log(movies[index]);
}
*/

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

/*
var movies = [];
var i;
movies[0] = 'The English Patient';
movies[1] = 'Blue';
movies[2] = 'Red';
movies[3] = 'Ghost';
movies[4] = 'The Beach';
movies[5] = 'You and I';
movies[6] = 'The Deep';

for (var index in movies) {
    movies.sort();
    console.log(movies[index]);
}
*/

//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
/*
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3

*/

/*

var favoriteMovies = [];



favoriteMovies[0] = 'The English Patient';
favoriteMovies[1] = 'Blue';
favoriteMovies[2] = 'Red';

var leastMovies = [];
leastMovies[0] = "Bridges";
leastMovies[1] = "Death";
leastMovies[2] = "Ninja";



for (var index in favoriteMovies + leastMovies) {
 favoriteMovies.sort();
 leastMovies.sort();
 favoriteMovies = favoriteMovies.join("\n");
 leastMovies = leastMovies.join("\n")
   console.log("Movies I like:" + "\n\n" + favoriteMovies + "\n\n" + "Movies I regreat watching:" + "\n\n" + leastMovies);

}

*/

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

/*
var favoriteMovies = [];

favoriteMovies[0] = 'The English Patient';
favoriteMovies[1] = 'Blue';
favoriteMovies[2] = 'Red';

var leastMovies = [];
leastMovies[0] = "Bridges";
leastMovies[1] = "Death";
leastMovies[2] = "Ninja";

movies = favoriteMovies.concat(leastMovies);
movies.reverse();
console.log(movies);
*/

//10.	Return just the last item in the array and display it within the console window.
/*
var favoriteMovies = [];

favoriteMovies[0] = 'The English Patient';
favoriteMovies[1] = 'Blue';
favoriteMovies[2] = 'Red';

var leastMovies = [];
leastMovies[0] = "Bridges";
leastMovies[1] = "Death";
leastMovies[2] = "Ninja";

movies = favoriteMovies.concat(leastMovies);

movies.reverse();
movies.sort();
movies = movies.pop();
console.log(movies);
//console.log(movies.slice(-1));
*/

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
/*
var favoriteMovies = [];

favoriteMovies[0] = 'The English Patient';
favoriteMovies[1] = 'Blue';
favoriteMovies[2] = 'Red';

var leastMovies = [];
leastMovies[0] = "Bridges";
leastMovies[1] = "Death";
leastMovies[2] = "Ninja";

movies = favoriteMovies.concat(leastMovies);
movies.reverse();
movies.sort();
movies = movies.shift();
console.log(movies);
*/

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
/*
var favoriteMovies = [];

favoriteMovies[0] = 'The English Patient';
favoriteMovies[1] = 'Blue';
favoriteMovies[2] = 'Red';

var leastMovies = [];
leastMovies[0] = "Bridges";
leastMovies[1] = "Death";
leastMovies[2] = "Ninja";

movies = favoriteMovies.concat(leastMovies);
console.log (movies.indexOf("Bridges") + ", " + movies.indexOf("Death") + ", " + movies.indexOf("Ninja"));
movies.splice(3, 4,  "Alice", "Paradise", "Error");
console.log(movies);

*/

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
/*

var employee1 = [];
employee1["id"] = 111;
employee1["name"] = "John Smith";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;


var employee2 = [];
employee2["id"] = 2222;
employee2["name"] = "Donna Thomson";
employee2["title"] = "Web Developer";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employees=[];
employees.push(employee1);
employees.push(employee2);

       
        console.log(employees[1].name);

        

*/



//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
		/*
var employee1 = [];
employee1["id"] = 111;
employee1["name"] = "John Smith";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;


var employee2 = [];
employee2["id"] = 2222;
employee2["name"] = "Donna Thomson";
employee2["title"] = "Web Developer";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employees=[];
employees.push(employee1);
employees.push(employee2);

        for(var i=0;i<employees.length;i++)
        {
        console.log(employees[i].name);

        }

 */

//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

/*
var employee1 = [];
employee1["id"] = 1111;
employee1["name"] = "John Smith";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;


var employee2 = [];
employee2["id"] = 2222;
employee2["name"] = "Donna Thomson";
employee2["title"] = "Web Developer";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;


var employee3 = [];
employee3["id"] = 3333;
employee3["name"] = "Alice Ponce";
employee3["title"] = "Web Developer";
employee3["department"] = "Engineering";
employee3["isCurrent"] = false;


var employees=[];
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

        for(var i=0;i<employees.length;i++)

        
			if (employees[i].isCurrent ==1)
        console.log(employees[i]);

		
*/

//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
/*
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

*/

/*
var movies = ["Blue", 1, "Red", 2, "White", 3, "Veronique", 4, "Ma Vie", 5];
//for (var i = 0; i < movies.length; i++) {
	var namesMovies = movies.filter(function(item) {
		return typeof item == "string"});
		console.log(namesMovies);
	//}
	*/


//Practice with Functions (5 points)
//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

/*
var displayMessage = function(movie)
{	console.log("My favorite movie is: " + movie + ".");}

 displayMessage("The English Patient");

*/



//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

/*
function calculate(x, y)
{ console.log(x % y);}

calculate(13,3);

*/

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
/*
Employees: 

ZAK 
JESSICA 
MARK 
FRED 
*/

/*

var employees = ["ZAK", "JESSICA", "MARK", "FRED"];
var showEmployee = function(name){
	name = name.join("\n");
	console.log("Employees:" + "\n\n" + name);
}

showEmployee(employees);
*/

/*
The Rock, Paper, Scissors Game (10 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:
1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
5.	What if the result ends in a tie? Figure out how to handle that as well.
6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
*/


/*

var userChoice = prompt("rock, paper or scissors?");
   if(userChoice != "rock", "paper", "scissors"){alert("Enter a correct response"); userChoice = prompt("rock, paper or scissors?");}
var computerChoice = Math.floor(Math.random()*12);
	if (computerChoice < 4) {
    	computerChoice = "rock";
	} else if(computerChoice <=8) {
    	computerChoice = "paper";
	} else {
    	computerChoice = "scissors";
	}


var compare = function(choice1,choice2){
    if(choice1===choice2){
        alert( "The result is a tie!");
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            alert("rock wins");
        }
        else{
            alert( "paper wins");
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            alert( "paper wins");
        }
        else{
            alert( "scissors wins");
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            alert( "rock wins");
        }
        else{
            alert( "scissors wins");
        }
    }
};
compare(userChoice,computerChoice);


*/

/*
The Basic Calculator (10 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
1.	Prompt the user for a number and store that in a variable.
2.	Prompt the user for a second number and store that in a variable.
3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
4.	Create a new named function called calculate() that accepts 3 parameters.
5.	Call the calculate function and pass in the 3 variables as parameters. 
HINT: You will need to convert the 2 numbers from strings to numbers. 
6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.
*/

/*
function questions(){

var number = prompt("Enter a number:");
var secondNumber = prompt("Enter a second number:");
var operation = prompt("Would you like to add, subtract, multiply or divide?");
//operation = operation.split(",");

var x = parseInt(number);
var y = parseInt(secondNumber);

function calculate(x, y, operation){
	switch(operation) {
		case "add":
		alert(x + y);
        break;
    case "subtract":
        alert(x - y);
        break;
	case "mutiply":
    	alert(x * y);
    	break;
			
    case "divide":
        alert(x / y);
	
		default:
		alert("You did not choose an operation.");
		questions();
} 
	
}
	calculate(x, y, operation);
}
	questions();
	
	*/

/*

Death by JavaScript (4 points each for 20 points total)
Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'

*/
/*
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));
*/

/*
2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

Sample Data and Output
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox'
*/

/*
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
*/



/*
3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5
*/

/*
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));
*/

/*

4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/

/*
function id(x)  
{  
var text = "";  
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
for(var i=0; i < x; i++ )  
{    
text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
}  
return text;  
}  
console.log(id(8)); 

*/

/*
5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

/*

function Longest_Country_Name(country_name)  
  {  
  return country_name.reduce(function(lname, country)   
  {  
    return lname.length > country.length ? lname : country;  
  },   
"");  
}  
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));  

*/
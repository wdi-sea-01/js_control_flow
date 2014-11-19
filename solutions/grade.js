//load prompt module
var prompt = require('sync-prompt').prompt;

//prompt for user input
var score = parseInt(prompt('What is your score? '));

//check for valid input
if(isNaN(score) || score < 0 || score > 100 ){
	console.log('Invalid Score. Enter a number between 0 and 100.');
	return;
}

//init variable for grade
var grade = '';

if(score >= 90){
	grade = 'A';
}else if(score >= 80){
	grade = 'B';
}else if(score >= 70){
	grade = 'C';
}else if(score >= 60){
	grade = 'D';
}else{
	grade = 'F';
}

//output the grade
console.log('Your grade is: '+grade);
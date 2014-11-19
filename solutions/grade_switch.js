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

switch(true){
	case score >= 90:
		grade = 'A';
		break;
	case score >= 80:
		grade = 'B';
		break;
	case score >= 70:
		grade = 'C';
		break;
	case score >= 60:
		grade = 'D';
		break;
	default:
		grade = 'F';
}

//output the grade
console.log('Your grade is: '+grade);
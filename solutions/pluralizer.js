//load prompt module
var prompt = require('sync-prompt').prompt;

//prompt for user input
var thing = prompt('What is your thing? ');
var count = parseInt(prompt('How many do you have? '));

//check for valid input
if(isNaN(count)){
	console.log('Invalid count. Enter a valid number.');
	return;
}

//do we need an s??
var s = count == 1 ? '' : 's';

//output the pluralized item
console.log("You have " + count + ' ' + thing + s + '.');

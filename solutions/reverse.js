//load prompt module
var prompt = require('sync-prompt').prompt;

//prompt for user input
var myStr = prompt('Enter a string to reverse: ');

//init output string
var outStr = '';

//loop through each character of the string
for(var i = 0; i < myStr.length; i++){
	//build the output string.
	//add each character of the original string to the
	//front of the output string
	outStr = myStr.charAt(i) + outStr;
	// console.log(outStr);
}

//output the answer
console.log(outStr);
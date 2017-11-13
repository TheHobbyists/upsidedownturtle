//Libraries
let colors = require('colors');

//Constants
let constant = "this NOT is a constant"

//Variables
var array = ["one", 2 , "three"];
var variable = "this NOT is a variable";
var dick = true;

if (dick == true){
	console.log("OHHHHHHHH YEAHHHHHHH".yellow)
	setTimeout( function (){
		console.log("fuck yeahhhhhhh".rainbow);
	},1000)
}
if (dick == false){
	console.log("God damn it. No dick.".red)
}

function on(){
	console.log("function".green );
}


on();
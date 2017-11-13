//Libraries
let colors = require('colors');

//Constants
let constant = "this NOT is a constant"

//Variables
var array = ["one", 2 , "three"];
var variable = "this NOT is a variable";
var dick = true;

if(dick == true){
	console.log("OHHHHHHHH YEAHHHHHHH".yellow);
	setTimeout(on,1000);
}

if(dick == false){
	console.log("God damn it. No dick.".red);
}

//Functions 
function on(){
	console.log("AAWWWW LAAWWWDDDD".green);
};

function asshole(dicks){
	if(dicks < 10){
	console.log("There are "+dicks+" dicks present."); } 
else { console.log("MANDINGO!!!".red); }
}

asshole(11);
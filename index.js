//Libraries
let colors = require('colors');

//Constants
let constant = "this NOT is a constant"

//Variables
var array = ["one", 2 , "three"];
var variable = "this NOT is a variable";
var dick = true;

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
    text = text.replace(/\n$/, '');
    if (text === 'quit') {
      setTimeout(function(){
        process.exit();
            }, 1000);
      
    }
});

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
	console.log("There are "+dicks+" dicks present.");
}

asshole(1);
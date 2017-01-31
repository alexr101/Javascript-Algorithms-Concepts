//THE ZIG ZAG STRING

//input: "zigzagstring"
//output: "zarizgtiggsn"

//Z   A   R
//I Z G T I G
//G   S   N

var a = "zigzagstring"

var zigZagger = function(str){
	var result = "";

	var rows = [[], [], []];//array for each row
	var currentRow = 0; //current row to place elements in 
	var numRows = 3; //rows in the zig zag
	var upCount = true; //counter up or down

	for(var i = 0; i < str.length; i++){

		//Check the row position programatically
		if(i === 0){ 
			rows[currentRow].push(str[i]);
		}else if(i%2 !== 0){
			rows[currentRow].push(str[i]); 
		} else {
			rows[currentRow].push(str[i]);
		}

		//if 0 or numRows then reverse the counter
		if( (currentRow === numRows-1) || (currentRow === 0 && i > 0) ) upCount = !upCount;

		//counter
		if(upCount) currentRow++;
		else currentRow--;
	}

	//Loop through the rows to add them to the string
	for(var i = 0; i < rows.length; i++){
		var result = result + rows[i].join("")
	}

	return result;
}

var result = zigZagger(a);
console.log(result)


//CLOSURE EXERCISE

//Immediately invoked function
//Function that holds on to its lexical scope
//You don't know JS closures
//It's called a closure because it encloses the outer functions variables inside of the inner function

var closure = function(){
	var count;
	return function(){
		return ++count;
	}
}

closure(); //returns 0
closure(); //returns 1


//CHECK IF TWO NUMBERS MATCH
//O(n2)
//Determines whether any two numbers in an array are the same
function numberMatcher(arr){
	for(var i = 0; i < arr.length; i++){
		var currentNum = arr[i];

		for(var b = 0; b < arr.length; b++ ){
			var comparisonNum = arr[b];
			if(i === b) continue; 

			if(currentNum === comparisonNum) return true;
		}
	}

	return false;
}

console.log(numberMatcher([1, 3, 3, 4, 5, 6]));


//CHECK IF THE SUM OF TWO NUMBERS MATCH TARGET

//O(n2)
//Determines whether the sum of any two numbers in the array match the target number in the
//second parameter
function matchSum(arr, num){

	for(var i = 0; i < arr.length; i++){

		var currentNum = arr[i];

		for(var b = 0; b < arr.length; b++){

			var comparisonNum = arr[b];

			if(i === b) continue;

			if(currentNum + comparisonNum === num) return true;
		}
	}

	return false;
}

console.log(matchSum([1, 2, 3, 4, 5], 4));

//MULTIPLE WAYS TO REVERSE A STRING IN JAVASCRIPT

//BRUTE FORCE
function stringReverser(str){
	var result;

	//var split = str.split("");
	for(var i = 0; i < str.length; i++){
		//result = str.pop();
	}
	return result;
}

//Javascript Methods
function stringReverser1(str){
	return str.split("").reverse().join("");
}

console.log(stringReverser1("hello"));

//SUM OF MULTIPLES OF 3 & 5
//O(n)...kinda because if the multiples array gets pretty big you have to loop through
//Number below a value num that are multiples of the two passed numbers x1 & x2
function sumOfMultiples(num, x1, x2){

	var result = 0;
	//Verify this with ternary operators so user doesn't have to worry
	//about parameter order
	var large = (x1 > x2) ? x1 : x2;
	var small = (!(x1 > x2)) ? x1 : x2;

	num--; //reduce value by 1 to only compare numbers below the value

	while(num >= small){
		if(num%large === 0) result = result + num;
		if(num%small === 0) result = result + num;

		num--;
	}

	return result;
}

console.log(sumOfMultiples(1000, 3, 5));



























































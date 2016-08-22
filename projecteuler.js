function multiplesOf3And5 (range) {
	var total = 0;
	for (var i = 0; i < range; i++) {
		if (i % 3 === 0 || i % 5 === 0 ) {
			total += i;
		}
		
	}
	console.log(total);
}

function evenFibonacci (range) {
	var previousX = 0;
	var currentX = 1;
	var nextX;
	var totalSum = 0;
	
	for (i = 1; currentX <= range; i++) {

		
		nextX = currentX + previousX;
		previousX = currentX;
		currentX = nextX;
		if (currentX % 2 === 0) {
			totalSum += currentX;
			console.log(totalSum);
		}
	}
	
}
function primeFactors (range) {
	var primeArray = [];

	// divide our number by 2 until it can't be divided anymore
	while (range % 2 === 0) {
		range = range / 2;
	}
	// remaining prime must be odd. 
	//start with odd number and increment by 2.
	for (i = 3; i <= Math.sqrt(range); i = i + 2) {
		// show primes that can be divided after square root eliminates divisible numbers.
		while (range % i === 0) {
			console.log(i);
			range = range / i;
		}
	}
	if (range > 2) {
		console.log(range);
	}
}


function isPalindrome (range) {
	var palindrome = parseInt(range.toString().split('').reverse().join(''));
	
	if (palindrome === range) {
		return true;
	}
	else {
		return false;
	}
}

function largestPalindromeProduct () {
	var range = prompt("Please enter the highest number integer. This function will return any palindromes below it. I.e. 3 digit palindrome product you would type 999.")
	var x = range;
	var y = range;
	product = x * y;
	
	for (x; x > (range - 100); x--) {
		for (y = x; y > (range - 100); y--) {
			product = x * y;
			if (isPalindrome(product)) {
				console.log(x + "*" + y + "=" + product);
			}
		}
	}
}

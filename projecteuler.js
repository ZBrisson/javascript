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

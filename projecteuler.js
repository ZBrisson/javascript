function MultiplesOf3And5 (range) {
	var total = 0;
	for (var i = 0; i < range; i++) {
		if (i % 3 === 0) {
			total += i;
		}
		else if (i % 5 === 0) {
			total += i;
		}
		else {
			
		}
		
	}
	console.log(total);
}

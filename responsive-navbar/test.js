const NOTES = [20000,10000,5000,2000,1000,500,200,100,50,20,10,5]

function roundToPrecision(x, precision) {
	var y = +x + (precision === undefined ? 0.5 : precision/2);
	return y - (y % (precision === undefined ? 1 : +precision));
}

calculateChange = (price, paid) => {
	const roundedPrice = roundToPrecision(price, 5)
	if (roundedPrice > paid) {
		throw "Price is greater than paid"
	}
	const changeNotes = []
	let change = paid - roundedPrice
	//console.log(`initial change: ${change}`);
	while (change > 0) {
		//console.log("-----------new WHILE loop-------------");
		for (let n of NOTES) {
			//console.log(`current note: ${n}`)
			//console.log(`current change: ${change}`)
			if (n <= change) {
				change = change - n
				changeNotes.push(n)
				//console.log(`change changed to: ${change}`);
				break
			}
		}
	}
	//console.log(changeNotes);
	return changeNotes
}


calculateChange(15, 200) // [100, 50, 20, 10, 5]
calculateChange(201, 200) // []
calculateChange(1545, 20000)
calculateChange(559, 600)



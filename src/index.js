module.exports = function toReadable(number) {
	let integers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
		'seventeen', 'eighteen', 'nineteen'];

	let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


	if (number <= 19) {
		let result = integers[number];
		return result;
	}

	if (number >= 20 && number < 100 && number % 10 == 0) {
		let result = dozens[number / 10];
		return result;
	}

	if (number >= 21 && number < 100) {

		let result = dozens[parseInt(number / 10)] + ' ' + integers[number % 10];
		return result;
	}

	/*if (number >= 100 && number <= 999 && number%10 == 0){
	  let result = integers[parseInt(number/100)];
	  return result;
	}*/


	if (number >= 100 && number <= 999) {

		let hundreds = integers[parseInt(number / 100)] + ' ' + 'hundred';

		let dozint = +(number.toString().slice(1));



		let dozintFinal = dozens[parseInt(dozint / 10)] + ' ' + integers[dozint % 10];

		if (dozint > 10 && dozint <= 19) {

			dozintFinal = integers[dozint];

		}

		let result = hundreds + ' ' + dozintFinal;

		let newResult = result.replace('zero ', '');
		let lastResult = newResult.replace('zero', '');
		lastResult = lastResult.trim();

		return lastResult;

	}
}

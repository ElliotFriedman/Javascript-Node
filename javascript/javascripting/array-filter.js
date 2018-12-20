var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


numbers = numbers.filter(function evenNumbers (number) {

	//we return the number if this condition is true :)
	return number % 2 === 0;

});

console.log(numbers);

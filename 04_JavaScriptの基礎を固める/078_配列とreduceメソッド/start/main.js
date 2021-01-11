const arr = [1, 2, 3, 4, 5];

arr.reduce(function (accu, curr) {
	console.log(accu, curr);
	return accu + curr;
})

const person = {
	firstName: "Makkie",
	age: 35,
	gender: male
};

thankYouMakkie(firstName, age) => {
	;
	if (age != 22)
		console.log("Thank you " + firstName + "!");
}
thankYouMakkie(person.firstName, person.age);

//exercise02a write a function that pushes into an array n random integer numbers
function pushRandom(n){
	var a=[];

	while (--n){
		i=(Math.random() *10);
		a.push(Math.floor(Math.random() *10));
	}
	return a;
}

//exercise02b filter even numbers and return the odd ones
function onlyOdd(a){
	var risultato= a.filter(function (item){
		item %2 !== 0;
	});
	return risultato;
}

//exercise02c sort obtained numbers from the smallest to the largest
function sortPersonale(a){
	a.sort(function(c, b){return c-b});
	return a;
}
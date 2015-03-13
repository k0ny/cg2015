//exercise01

//exercise01a write a function that pushes into an array the first n natural numbers
function pushh(n){
	var r = [];
	n=n+1;
  		while (--n) {
    	r.unshift(n);
  		}
  return r;
};

//exercise01b filter out odd number and return the even ones
	function pari(a){
		risultato= a.filter(function(item){
		return item %2 === 0;});
		return risultato;
	};

//xercise01c double each even number obtained
	function doppio(a){
		risultato= a.map(function(item){
				return item * 2;
			});
		return risultato;
	};

//exercise01d return only numbers divisible by 4
	function divPer4(a){
		risultato= a.filter(function(item){
					return item %4 ===0;
		});
		return risultato;
	};

	function somma(a){
		risultato= a.reduce(funcion(prev,curr){
					return prev+curr; 
		});
		return risultato;
	};
	

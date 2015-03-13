//es 02 write a script containing the function identity(n)
//that returns the n rows by n columns identity matrix
function identity(n){
	var a="";
	for(i=1; i<=n; i++){
		a="";
		for(j=1; j<=n; j++){
			if (j===i)
				a += 1+", ";
			else
				a += 0+", ";
		}
		console.log(a);
	}

}
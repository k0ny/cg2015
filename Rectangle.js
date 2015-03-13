function Rectangle(base, altezza){
	this.base= base;
	this.altezza= altezza;
}
Rectangle.prototype.name = "rectangle";
Rectangle.prototype.area= function() {
	return (this.base * this.altezza);
}
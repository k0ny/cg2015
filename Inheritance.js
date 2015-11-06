/* Exercise 01 */

function Door(state){ 
	this.state = state;
}

Door.prototype.open = function(){
	this.state = 'open';
}

Door.prototype.close = function(){
	this.state = 'closed';
}


function SecurityDoor(state){
	Door.call(this, state);
}

/* Inheritance */
SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

/* SecurityDoor methods */

SecurityDoor.prototype.lock = function(){
	if (this.state === 'closed')
		this.state = 'locked';
}

SecurityDoor.prototype.unlock = function(){
	if (this.state === 'locked')
		this.state = 'closed';
}

/*  Overriding open() and close(), so that 
	SecurityDoor.state can't be altered if 
	it's set on 'locked'. */

SecurityDoor.prototype.open = function(){
	if(this.state !== 'locked')
		this.state = 'open';
}
SecurityDoor.prototype.close = function(){
	if(this.state !== 'locked')
		this.state = 'closed';
}
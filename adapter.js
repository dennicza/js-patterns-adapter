function FahrenheitSensor () {
	this.getFahrenheitTemp() {
		var t = 66.6;
		//	some code
		return t;
	}
}

function Sensor () {
	this.connect = function () {
		console.log ('Connected to sensor');
	};
	this.getCelsiumTemp = function () {
		//	some code
		var t = 13;
		return 'Data from sensor';
	};
}

function Adapter () {
	var redis = new Sensor ();
	redis.connect();
	
	this.getFahrenheitTemp() {
		return redis.getCelsiumTemp();
	};
}

function Client (operator) {
	console.log (operator.getFahrenheitTemp());
}

var man = new Client (new Adapter());

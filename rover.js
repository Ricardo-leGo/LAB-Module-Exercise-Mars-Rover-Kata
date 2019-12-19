const rover = {
	direction:'N',
	x:0,
	y:0,
	travelLog:[]
};
function turnLeft(rover){
let roverDirection = rover.direction;
switch (roverDirection) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
					console.log("No es un parametro definido ::::turnLeft");
      break;
	}
}


function turnRight(rover){
let roverDirection = rover.direction;
switch (roverDirection){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
					console.log("No es un parametro definido ::::turnRight");
      break;
	}

}

function moveForward(rover){
	console.log(rover.direction);
	switch (rover.direction) {
		case 'N':
			rover.y -=10;
			break;
		case 'W':
			rover.x -=10;
			break;
		case 'E':
			rover.x +=10;
			break;
		case 'S':
			rover.y +=10;
			break;
		default:
		console.log(`No es un parametro definido`);
			break;
	}

	rover.travelLog.push('{x:'+rover.x+',y:'+rover.y+'}')


}


function comands(rover, stringValue){

	let stringLowercase = stringValue.toLowerCase();

		for (var i = 0; i < stringLowercase.length; i++) {

			switch (stringLowercase[i]) {
				case 'r':
					turnRight(rover)
					break;
				case 'l':
					turnLeft(rover)
					break;
				case 'f':
					moveForward(rover)
					break;				
				default:
					console.log("No es un parametro definido");
					break;
			}
		};


}


comands(rover,'rffrfflfrff');
console.log(rover);

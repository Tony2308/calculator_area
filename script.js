function print(message) {
	let output = document.querySelector('#output');
	output.innerHTML = message;
	return message;
}

//square function
function areaSquare(squareLength) {
	const squareArea = squareLength * squareLength;
	return squareArea;
}

//rectangle function
function areaRectangle(rectangleLength, width) {
	const rectangleArea = rectangleLength * width;
	return rectangleArea;
}
//circle function
function areaCircle(radius) {
	const areaCircle = 3.142 *radius*radius;
	return areaCircle;
}

//variable declarations and initializations
let cirle;
let rectangle;
let square;
let choice = document.querySelector('#choice');
let units = document.querySelector('#units');
let compute = document.querySelector('#calculate');
let output = document.querySelector('#output');
let shapeDetail = document.querySelector('.shapeDetail');
let circleParam = document.querySelector('#circleParam');
let squareParam = document.querySelector('#squareParam');
let rectangleParam = document.querySelector('#rectangleParam');
let customParam = document.querySelector('#customParam');

//parametres variables

let squareLength = document.querySelector('#squareLength');
let rectangleLength = document.querySelector('#rectangleLength');
let width = document.querySelector('#width');
let radius = document.querySelector('#radius');

//displaying the selected parameter details
function shapeData(){
	if( choice.value ==  'circle'){

		circleParam.style.display = 'block';
		squareParam.style.display = 'none';
		rectangleParam.style.display = 'none';
		
	} else if( choice.value ==  'square' ){
		squareParam.style.display = 'block';
		circleParam.style.display = 'none';
		rectangleParam.style.display = 'none';

	}else if( choice.value ==  'rectangle'  ) {
		rectangleParam.style.display = 'block';
		squareParam.style.display = 'none';
		circleParam.style.display = 'none';
	}

}

compute.addEventListener('click', function() {

	if (units.value === 'foot') {
		units = 'square feets';
	} else if (units.value === 'metres') {
		units = 'square metres';
	}

	if (choice.value === 'circle') {
		
		radius = parseFloat(radius.value);
		message = `The area of your <span class = 'answer'>${choice.value}</span> shape is <p><span class = 'answer'>${areaCircle(radius)}</span> </p> ${units} `;
		print(message);

	} else if(choice.value === 'rectangle'){
		
		 rectangleLength = parseFloat(rectangleLength.value);
		 width = parseFloat(width.value);

		message = `The area of your <span class = 'answer'>${choice.value}</span> shape is <p><span class = 'answer'>${areaRectangle(rectangleLength,width)}</span></p> ${units} `;
		print(message);

	} else if(choice.value === 'square'){
		
		squareLength = parseFloat(squareLength.value);
		message = `The area of your <span class = 'answer'> ${choice.value}</span> shape is <p><span class = 'answer'>${areaSquare(squareLength)}</span></p> ${units} `;
		print(message);

	} else{
		message = `the shape is out of scope`;
		print(message);
	}

});
















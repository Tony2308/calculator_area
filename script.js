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

//sphere function
function areaSphere(radius) {
	const areaSphere = 4 * 3.142 *radius*radius;
	return areaSphere;
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
let sphereParam = document.querySelector('#sphereParam');
let customParam = document.querySelector('#customParam');

//parametres variables

let squareLength = document.querySelector('#squareLength');
let rectangleLength = document.querySelector('#rectangleLength');
let width = document.querySelector('#width');
let circleRadius = document.querySelector('#circleRadius');
let sphereRadius = document.querySelector('#sphereRadius');

//displaying the selected parameter details
function shapeData(){
	if( choice.value ===  'circle'){

		circleParam.style.display = 'block';
		squareParam.style.display = 'none';
		rectangleParam.style.display = 'none';
		sphereParam.style.display = 'none';
		
	} else if( choice.value === 'square' ){
		squareParam.style.display = 'block';
		circleParam.style.display = 'none';
		rectangleParam.style.display = 'none';
		sphereParam.style.display = 'none';

	}else if( choice.value ===  'rectangle'  ) {
		rectangleParam.style.display = 'block';
		squareParam.style.display = 'none';
		circleParam.style.display = 'none';
		sphereParam.style.display = 'none';
	}else if( choice.value === 'sphere' ){
		rectangleParam.style.display = 'none';
		squareParam.style.display = 'none';
		circleParam.style.display = 'none';
		sphereParam.style.display = 'block';
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

	} else if( choice.value === 'sphere' ){
		sphereRadius = parseFloat(sphereRadius.value);
		message = `The area of your <span class = 'answer'> ${choice.value}</span> shape is <p><span class = 'answer'>${areaSquare(sphereRadius)}</span></p> ${units} `;
		print(message);

	} else{
		message = `the shape is out of scope`;
		print(message);
	}

});
















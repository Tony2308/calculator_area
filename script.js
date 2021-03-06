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
function areaSphere(sphereRadius) {
	const areaSphere = 4 * 3.142 *sphereRadius*sphereRadius;
	return areaSphere;
}

//triangle function

function areaTriangle(triangleLength,triangleHeight){
	const areaTriangle = 0.5  * triangleLength * triangleHeight;
	return areaTriangle;
}



//variable declarations and initializations
let cirle;
let rectangle;
let square;
let choice = document.querySelector('#choice');
let units = document.querySelector('#units');
let compute = document.querySelector('#calculate');
let clear = document.querySelector('#clear');
let output = document.querySelector('#output');
let shapeDetail = document.querySelector('.shapeDetail');
let circleParam = document.querySelector('#circleParam');
let squareParam = document.querySelector('#squareParam');
let rectangleParam = document.querySelector('#rectangleParam');
let sphereParam = document.querySelector('#sphereParam');
let triangleParam = document.querySelector('#triangleParam');
let customParam = document.querySelector('#customParam');

//parametres variables

let squareLength = document.querySelector('#squareLength');
let rectangleLength = document.querySelector('#rectangleLength');
let width = document.querySelector('#width');
let circleRadius = document.querySelector('#circleRadius');
let sphereRadius = document.querySelector('#sphereRadius');
let triangleLength = document.querySelector('#triangleLength');
let triangleHeight = document.querySelector('#triangleHeight');

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

	}	else if( choice.value === 'triangle' ){
		triangleParam.style.display = 'block';
		rectangleParam.style.display = 'none';
		squareParam.style.display = 'none';
		circleParam.style.display = 'none';
		sphereParam.style.display = 'none';
	}

}
// button events
compute.addEventListener('click', function() {

	if (units.value === 'foot') {
		units = 'square feets';
	} else if (units.value === 'metres') {
		units = 'square metres';
	}else{
		message = `please select a valid unit`;
		print(message);
	}
// c
	if (choice.value === 'circle') {
		
		circleRadius = parseFloat(circleRadius.value);
		message = `The area of your <p class = 'answer'>${choice.value}</p> shape is <p><span class = 'answer'>${areaCircle(circleRadius)}</span> </p> ${units} `;
		print(message);

	} else if(choice.value === 'rectangle'){
		
		 rectangleLength = parseFloat(rectangleLength.value);
		 width = parseFloat(width.value);

		message = `The area of your <p class = 'answer'>${choice.value}</p> shape is <p><span class = 'answer'>${areaRectangle(rectangleLength,width)}</span></p> ${units} `;
		print(message);

	} else if(choice.value === 'square'){
		
		squareLength = parseFloat(squareLength.value);
		message = `The area of your <p class = 'answer'> ${choice.value}</p> shape is <p><span class = 'answer'>${areaSquare(squareLength)}</span></p> ${units} `;
		print(message);

	} else if( choice.value === 'sphere' ){
		sphereRadius = parseFloat(sphereRadius.value);
		message = `The area of your <p class = 'answer'> ${choice.value}</p> shape is <p><span class = 'answer'>${areaSphere(sphereRadius)}</span></p> ${units} `;
		print(message);

	}  else if( choice.value === 'triangle' ){
		triangleLength = parseFloat(triangleLength.value);
		triangleHeight = parseFloat(triangleHeight.value);
		message = `The area of your <p class = 'answer'> ${choice.value}</p> shape is <p><span class = 'answer'>${areaTriangle(triangleLength,triangleHeight)}</span></p> ${units} `;
		print(message)
	
	} else{
		message = `the shape is out of scope`;
		print(message);
	}

});

clear.addEventListener('click', function(){
	location.reload();
});















